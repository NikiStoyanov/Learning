int n = int.Parse(Console.ReadLine());

TowerOfHanoi(n, 'A', 'C', 'B');

void TowerOfHanoi(int n, char from, char to, char aux)
{
    if (n == 0) return;

    TowerOfHanoi(n - 1, from, aux, to);

    Console.WriteLine("Move disk " + n + " from " + from + " to " + to);

    TowerOfHanoi(n - 1, aux, to, from);
}