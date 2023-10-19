var numerator = int.Parse(Console.ReadLine());
var denominator = int.Parse(Console.ReadLine());

Console.Write("Egyptian Fraction Representation of " 
    + numerator + "/" + denominator + " is\n ");
PrintEgyptian(numerator, denominator);

 void PrintEgyptian(int numerator, int denominator)
{
    if (numerator == 0) return;

    if (denominator == 0) throw new DivideByZeroException();

    if (denominator % numerator == 0)
    {
        Console.Write("1/" + denominator / numerator);
        return;
    }

    if (numerator % denominator == 0)
    {
        Console.Write(numerator / denominator);
    }

    if (numerator > denominator)
    {
        Console.Write(numerator / denominator + " + ");
        PrintEgyptian(numerator % denominator, denominator);
        return;
    }

    double n = denominator / numerator;
    int q = (int)Math.Ceiling(n);

    Console.Write("1/" + q + " + ");
    
    // Recur for remaining part
    PrintEgyptian(numerator * q - denominator, denominator * q);
}