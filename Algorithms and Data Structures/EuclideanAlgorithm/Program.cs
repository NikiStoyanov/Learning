var a = int.Parse(Console.ReadLine());
var b = int.Parse(Console.ReadLine());

Console.WriteLine(EuclidSubtraction(a, b));
Console.WriteLine(EuclidDivision(a, b));

int EuclidSubtraction(int a, int b)
    => a == b
        ? a
        : a > b
            ? EuclidSubtraction(a - b, b)
            : EuclidSubtraction(a, b - a);

int EuclidDivision(int a, int b)
{
    if (b == 0) return a;

    int r = b;
    b = a % b;
    a = r;

    return EuclidDivision(a, b);
}