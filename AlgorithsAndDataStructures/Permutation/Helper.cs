namespace Permutation;

internal class Helper
{
    /// <summary>
    /// Swap elements in an array
    /// </summary>
    /// <typeparam name="T">Type of the structure</typeparam>
    /// <param name="array">Data Structure</param>
    /// <param name="first">First element</param>
    /// <param name="second">Second element</param>
    public static void Swap<T>(T[] array, int first, int second)
    {
        var temp = array[first]; 
        array[first] = array[second]; 
        array[second] = temp;
    }
}
