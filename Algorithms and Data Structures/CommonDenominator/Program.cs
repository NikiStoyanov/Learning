int a = int.Parse(Console.ReadLine());
int b = int.Parse(Console.ReadLine());

Console.WriteLine(CommonDenominator(a, b));

int CommonDenominator(int a, int b)
    => (a * b) / EuclidSubtraction(a, b);

int EuclidSubtraction(int a, int b)
    => a == b 
        ? a
        : a > b
            ? EuclidSubtraction(a - b, b)
            : EuclidSubtraction(a, b - a);