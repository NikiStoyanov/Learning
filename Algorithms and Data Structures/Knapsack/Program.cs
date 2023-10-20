const int N = 8; // Count of objects
const int C = 7; // Sack capacity
int[] V = { 0, 5, 3, 9, 1, 1, 2, 5, 2}; // Prices
int[] W = { 0, 3, 7, 6, 1, 2, 4, 5, 5}; // Weights
int result = 0; // Results

Console.WriteLine($"Number of items = {N}");
Console.WriteLine($"Values: {string.Join(", ", V)}");
Console.WriteLine($"Weights: {string.Join(", ", W)}");
Console.WriteLine($"Capacity = {C}");
Console.WriteLine($"Sum = {Knapsack(N, C)}");

// Knapsack
int Knapsack(int n, int c)
{
    if (n == 0 || c == 0) return 0;
    else if (W[n] > c) return Knapsack(n - 1, C);
    else
    {
        var temp1 = Knapsack(n - 1, c);
        var temp2 = V[n] + Knapsack(n - 1, C - W[n]);
        result = Math.Max(temp1, temp2);

        return result;
    }
}