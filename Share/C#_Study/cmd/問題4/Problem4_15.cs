using System;

namespace Problem4_15
{
    class Program
    {
        static void Main(string[] args)
        {
            for (int i = 1; i < 101; i++)
            {
                Console.Write("{0} ", i);
                if (i % 10 == 0)
                {
                    Console.WriteLine();
                }
            }
        }
    }
}