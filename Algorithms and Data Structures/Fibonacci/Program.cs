int n = int.Parse(Console.ReadLine());

long[] memory = new long[n + 1];

Console.WriteLine(Fibonacci(n));

Console.WriteLine(string.Join(", ", memory));

long Fibonacci(int n)
{
    if (memory[n] != 0) return memory[n];

    if (n <= 1) memory[n] = 1;
    else memory[n] = Fibonacci(n - 2) + Fibonacci(n - 1);
    return memory[n];
}

// List<int> fib = new List<int>();
//
// //Input
// Console.Write("n=");
// int n = int.Parse(Console.ReadLine());
//
// //Output
// int a = 1, b = 1, c = a + b;
//
// // Add 3 elements to the list
// fib.Add(a);
// fib.Add(b);
// fib.Add(c);
//
// // Iterate to n
// for (int i = 0; i < n - 3; i++)
// {
//     // Floating window
//     a = b;
//     b = c;
//     c = a + b;
//     
//     // Add the next element
//     fib.Add(c);
// }
//
// Console.WriteLine(string.Join(", ", fib));