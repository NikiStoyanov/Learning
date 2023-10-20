using Knapsack2;

List<Item> items = new List<Item>();

Console.WriteLine("Enter capacity=: ");
var capacity = double.Parse(Console.ReadLine());
Console.Write("Enter items [name weight value], end to exit: ");
var line = Console.ReadLine();

while (line != "end")
{
    var parts = line.Split();

    items.Add(new Item(
        parts[0], 
        double.Parse(parts[1]), 
        double.Parse(parts[2])));

    line = Console.ReadLine();
}

List<Item> takenItems = Knapsack(items.ToArray(), capacity);

Console.WriteLine($"Total Weight: {takenItems.Sum(item => item.Weight)}");
Console.WriteLine($"Total Value: {takenItems.Sum(item => item.Value)}");
Console.WriteLine($"Picked Items: {string.Join(", ", takenItems.OrderBy(item => item.Name))}");

List<Item> Knapsack(Item[] items, double capacity)
{
    double[,] values = new double[items.Length, (int)Math.Ceiling(capacity + 1)];
    bool[,] IsItemIncluded = new bool[items.Length + 1, (int)Math.Ceiling(capacity + 1)];
    
    // Sum calculations
    for (int itemsIndex = 0; itemsIndex < items.Length; itemsIndex++)
    {
        int row = itemsIndex + 1;

        Item item = items[itemsIndex];

        for (int currentCapacity = 1; currentCapacity <= capacity; currentCapacity++)
        {
            int excludedValue = (int)values[row - 1, currentCapacity];
            int includedValue = 0;

            if (item.Weight <= currentCapacity)
            {
                includedValue = (int)(item.Value + values[row - 1, (int)(currentCapacity - item.Weight)]);
            }

            if (includedValue > excludedValue)
            {
                values[row, currentCapacity] = includedValue;
                IsItemIncluded[row, currentCapacity] = true;
            }
            else
            {
                values[row, currentCapacity] = excludedValue;
            }
        }
    }

    List<Item> takenItems = new List<Item>();
    for (int i = items.Length; i > 0; i--)
    {
        if (!IsItemIncluded[i, (int)capacity]) continue;
        Item item = items[i - 1];
        takenItems.Add(item);
        capacity -= item.Weight;
    }

    return takenItems;
}