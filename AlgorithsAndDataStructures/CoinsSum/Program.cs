Console.Write("Insert all available coins (separated by comma): ");
var coins = Console
    .ReadLine()
    ?.Split(", ")
    .Select(int.Parse)
    .OrderByDescending(x => x)
    .ToList();

Console.Write("Enter the sum you want to withdraw: ");
int sum = int.Parse(Console.ReadLine());

var presentedSum = new Queue<int>();

for (int i = 0; i < coins.Count; i++)
{
    if (sum - coins[i] >= 0)
    {
        sum -= coins[i];
        presentedSum.Enqueue(coins[i]);
    }
}

Console.WriteLine(sum == 0 
    ? "You withdrawed: " + string.Join(", ", presentedSum)
    : "You cannot withdraw this sum at this moment.");
