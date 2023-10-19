using Combinatorics;

var stringData = new[] { 'a', 'b', 'c'};
var integerData = new[] { 1, 2, 3 };

//Console.WriteLine("String permutation:");
//Algorithms.PermuteNotRepeat(stringData, 0);

//Console.WriteLine();

//Console.WriteLine("Integer permutation:");
//Algorithms.PermuteNotRepeat(integerData, 0);

//Console.WriteLine();

//Console.WriteLine("String permutation by swap:");
//Algorithms.PermuteBySwap(stringData, 0);

//Console.WriteLine();

//Console.WriteLine("Integer permutation by swap:");
//Algorithms.PermuteBySwap(integerData, 0);

// Console.WriteLine();
//
// Console.WriteLine("String variation:");
// Algorithms.Variation(stringData, 2);
//
// Console.WriteLine();
//
// Console.WriteLine("Integer variation:");
// Algorithms.Variation(integerData, 2);
//
// Console.WriteLine();

// Console.WriteLine("String combination:");
// Algorithms.Combination(stringData, 2);
//
// Console.WriteLine();
//
// Console.WriteLine("Integer combination:");
// Algorithms.Combination(integerData, 2);

Console.WriteLine("Binomial [5/35]={0}", Algorithms.Binom(5, 35));