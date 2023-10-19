var number = int.Parse(Console.ReadLine());

FindCombinations(number);
static void FindCombinationsUtil(
    int[] arr,
    int index,
    int num,
    int reducedNum,
    List<List<int>> result)
{
    // Дъно на рекурсията
    if (reducedNum < 0) 
        return;

    // Добавяне на комбинацията към лист от всички възможни комбинации
    if (reducedNum == 0)
    {
        var addends = new List<int>();
        for (int i = 0; i < index; i++)
            if (arr[i] != num)
                addends.Add(arr[i]);

        addends.Reverse();
        if (addends.Count != 0)
            result.Add(addends);

        return;
    }

    // Смяна на предпоследния елемент
    int prev = (index == 0) ? 1 : arr[index - 1];

    // Рекурсивно извикване на следващите комбинации
    for (int k = prev; k <= num; k++)
    {
        arr[index] = k;

        FindCombinationsUtil(arr, index + 1, num,
            reducedNum - k, result);
    }
}

static void FindCombinations(int n)
{
    var vector = new int[n];
    var result = new List<List<int>>();

    // Извикване на метода за обхождане на всички комбинации
    FindCombinationsUtil(vector, 0, n, n, result);

    // Принтиране на всички възможни комбинации
    result
        .OrderByDescending(c => c[0])
        .ToList()
        .ForEach(combination 
        => Console.WriteLine(string.Join("+", combination)));
}