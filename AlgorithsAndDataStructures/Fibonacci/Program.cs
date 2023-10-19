long[] memory;

long Fibonacci(int n)
{
    if (memory[n] != 0) return memory[n];
    {
        
    }
    return Fibonacci(n - 1) + Fibonacci(n - 2)
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