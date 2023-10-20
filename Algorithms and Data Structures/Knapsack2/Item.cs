namespace Knapsack2;

public class Item
{
    public Item(string name, double weight, double value)
    {
        Name = name;
        Weight = weight;
        Value = value;
    }

    public string Name { get; set; }

    public double Weight { get; set; }

    public double Value { get; set; }

    public override string ToString()
    {
        return $"{this.Name}";
    }
}