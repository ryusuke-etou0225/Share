using System;

namespace Problem4_9
{
    class Program
    {
        static void Main(string[] args)
        {
            int seed = Environment.TickCount;
            while (true)
            {
                Random rnd = new Random(seed++);
                int randomNumber = rnd.Next(1,101);
                Console.WriteLine(randomNumber);
                if (randomNumber % 10 == 0)
                {
                    Console.WriteLine("終了します");
                    break;
                }
            }
        }
    }
}