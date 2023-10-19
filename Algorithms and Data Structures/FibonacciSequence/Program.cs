var n = int.Parse(Console.ReadLine());

Console.WriteLine(Fib(n));

int Fib(int n)
    => n == 1 || n == 2
        ? 1
        : Fib(n - 1) + Fib(n - 2);