using System;

namespace Problem4_18
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int i = 1; i < 11; i++)
            {
                for (int j = 1; j < 11; j++)
                {
                    if (i == j)
                    {
                        Console.Write("□");
                    }
                    else
                    {
                        Console.Write("■");
                    }
                }
                Console.WriteLine();
            }
        }
    }
}