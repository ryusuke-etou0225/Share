using System;

namespace Problem4_11
{
    class Program
    {
        static void Main(string[] args)
        {
            int seed = Environment.TickCount;
            int min = 100, max = 0;
            // int min = 100;
            // int max =  0;
            for (int i = 0; i < 5; i++)
            {
                Random rnd = new Random(seed++);
                int randomNumber = rnd.Next(1,101);
                Console.WriteLine(randomNumber);
                if (randomNumber < min)
                {
                    min = randomNumber;
                }
                else if (randomNumber > max)
                {
                    max = randomNumber;
                }
            }
            Console.WriteLine("最大値：{0}", max);
            Console.WriteLine("最小値：{0}", min);
        }
    }
}