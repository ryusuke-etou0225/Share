using System;

namespace Problem4_10
{
    class Program
    {
        static void Main(string[] args)
        {
            int seed = Environment.TickCount;
            for (int i = 0; i < 5; i++)
            {
                Random rnd = new Random(seed++);
                int randomNumber = rnd.Next(1,101);
                Console.WriteLine(randomNumber);
            }
        }
    }
}