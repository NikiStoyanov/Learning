using Permutation;

namespace Combinatorics;

public static class Algorithms
{
    // Permutation
    public static void PermuteNotRepeat<T>(T[] array, int index)
    {
        T[] vector = new T[array.Length];
        bool[] used = new bool[array.Length];
        PermuteNotRepeat(array, vector, used, index);
    }

    private static void PermuteNotRepeat<T>(T[] array, T[] vector, bool[] used, int index)
    {
        if (index >= vector.Length)
        {
            Console.WriteLine(string.Join(" ", vector));
        }
        else
        {
            for (int i = 0; i < array.Length; i++)
            {
                if (!used[i])
                {
                    used[i] = true;
                    vector[index] = array[i];
                    PermuteNotRepeat(array, vector, used, index + 1);
                    used[i] = false;
                }
            }
        }
    }

    // Permutation with swapping
    public static void PermuteBySwap<T>(T[] array, int index)
    {
        if (index >= array.Length)
        {
            Console.WriteLine(string.Join(" ", array));
        }
        else
        {
            PermuteBySwap(array, index + 1);

            for (int i = 0; i < array.Length; i++)
            {
                Helper.Swap(array, index, i);
                PermuteBySwap(array, index + 1);
                Helper.Swap(array, index, i);
            }
        }
    }

    public static void Variation<T>(T[] array, int k)
    {
        var vector = new int[k];

        while (true)
        {
            VariationPrint(array, vector);
            var index = k - 1;

            while(index >= 0 && vector[index] == array.Length - 1)
            {
                index--;
            }

            if (index < 0) break;

            vector[index]++;

            for (int i = index + 1; i < vector.Length; i++)
            {
                vector[i] = 0;
            }
        }
    }

    private static void VariationPrint<T>(T[] array, int[] vector)
    {
        for (int i = 0; i < vector.Length; i++)
        {
            Console.Write("{0}", array[vector[i]]);
        }

        Console.WriteLine();
    }

    public static void Combination<T>(T[] array, int k)
    {
        var vector = new T[k];
        Combination(array, vector, 0, 0);
    }

    private static void Combination<T>(T[] array, T[] vector, int index, int start)
    {
        if (index >= vector.Length)
        {
            Console.WriteLine(string.Join(" ", vector));
        }
        else
        {
            for (int i = start; i < array.Length; i++)
            {
                vector[index] = array[i];
                Combination(array, vector, index + 1, i + 1);
            }
        }
    }

    public static void CombinationRepeat<T>(T[] array, int k)
    {
        T[] vector = new T[k];
        CombinationRepeat(array, vector, 0, 0);
    }

    private static void CombinationRepeat<T>(T[] array, T[] vector, int index, int start)
    {
        if (index >= vector.Length)
        {
            Console.WriteLine(string.Join(" ", vector));
        }
        else
        {
            for (int i = start; i < array.Length; i++)
            {
                vector[index] = array[i];
                Combination(array, vector, index + 1, i);
            }
        }
    }

    public static long Binom(int k, int n)
    {
        if (k == 0 || k == n) return 1;
        
        return Binom(k - 1, n - 1) + Binom(k, n - 1);
    } 
}