using System;
using System.Collections.Concurrent;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace PrimeNumbers
{
    class Program
    {
        static void Main(string[] args)
        {
            Stopwatch sw = Stopwatch.StartNew();

            object lockObj = new object();
            int count = 0;

            //for (int i = 1; i <= 1000000; i++)
            Parallel.For(1, 1000001, (i) =>
            {
                bool isPrime = true;

                for (int div = 2; div <= Math.Sqrt(i); div++)
                {
                    if (i % div == 0)
                    {
                        isPrime = false;
                    }
                }

                if (isPrime)
                {
                    lock (lockObj)
                    {
                        count++;
                    }
                }
            });

            Console.WriteLine(count);
            Console.WriteLine(sw.Elapsed);

            // Task Parallel Library (TPL)

            // Task.Run(() =>
            // {
            //     for (int i = 0; i < 1000; i++)
            //     {
            //         Console.WriteLine(i);
            //     }
            // }).ContinueWith((previousTask) =>
            //{
            //    for (int i = 0; i < 1000; i++)
            //    {
            //        Console.WriteLine(i);
            //    }
            //});
            // Task.Run(() =>
            // {
            //     for (int i = 1000; i < 2000; i++)
            //     {
            //         Console.WriteLine(i);
            //     }
            // });

            // while (true)
            // {
            //     var line = Console.ReadLine();
            //     Console.WriteLine(line.ToUpper());
            // }

            ////Deadlock
            //var lockObj1 = new object();
            //var lockObj2 = new object();

            //var thread1 = new Thread(() =>
            //{
            //    lock (lockObj1)
            //    {
            //        Thread.Sleep(1000);
            //        lock (lockObj2)
            //        {
            //        }
            //    }
            //});
            //var thread2 = new Thread(() =>
            //{
            //    lock (lockObj2)
            //    {
            //        Thread.Sleep(1000);
            //        lock (lockObj1)
            //        {
            //        }
            //    }
            //});

            //thread1.Start();
            //thread2.Start();

            //thread1.Join();
            //thread2.Join();

            //var numbers = new ConcurrentQueue<int>(Enumerable.Range(0, 10000).ToList());
            //for (int i = 0; i < 4; i++)
            //{
            //    new Thread(() =>
            //    {
            //        while(numbers.Count > 0)
            //        {
            //            //numbers.TryDequeue(out int x);
            //            numbers.TryDequeue(out _);
            //        }
            //    }).Start();
            //}

            //return;

            //Stopwatch sw = Stopwatch.StartNew();

            //object lockObj = new object();
            ////decimal money = 0;
            //int count = 0;

            //var thread1 = new Thread(() =>
            //{
            //    for (int i = 1; i <= 500000; i++)
            //    {
            //        bool isPrime = true;

            //        for (int div = 2; div <= Math.Sqrt(i); div++)
            //        {
            //            if (i % div == 0)
            //            {
            //                isPrime = false;
            //            }
            //        }

            //        if (isPrime)
            //        {
            //            lock(lockObj)
            //            {
            //                count++;
            //            }
            //        }
            //    }
            //});
            //thread1.Start();

            //var thread2 = new Thread(() =>
            //{
            //    for (int i = 500001; i <= 1000000; i++)
            //    {
            //        bool isPrime = true;

            //        for (int div = 2; div <= Math.Sqrt(i); div++)
            //        {
            //            if (i % div == 0)
            //            {
            //                isPrime = false;
            //            }
            //        }

            //        if (isPrime)
            //        {
            //            lock (lockObj)
            //            {
            //                count++;
            //            }
            //        }
            //    }
            //});
            //thread2.Start();

            //thread1.Join();
            //thread2.Join();
            //Console.WriteLine(count);
            //Console.WriteLine(sw.Elapsed);

            ////Thread thread = new Thread(MyThreadMainMethod);
            //thread.Start();

            //while (true)
            //{
            //    var line = Console.ReadLine();
            //    Console.WriteLine(line.ToUpper());
            //}
        }

        //private static void MyThreadMainMethod()
        //{
        //    var sw = Stopwatch.StartNew();
        //    Console.WriteLine(CountPrimeNumbers(1, 1000000));
        //    Console.WriteLine(sw.Elapsed);
        //}

        //private static int CountPrimeNumbers(int from, int to)
        //{
        //    int count = 0;

        //    for (int i = 1; i <= 1000000; i++)
        //    {
        //        bool isPrime = true;

        //        for (int div = 2; div <= Math.Sqrt(i); div++)
        //        {
        //            if (i % div == 0)
        //            {
        //                isPrime = false;
        //            }
        //        }

        //        if (isPrime)
        //        {
        //            count++;
        //        }
        //    }

        //    return count;
        //}
    }
}
