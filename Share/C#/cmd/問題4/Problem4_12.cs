using System;

namespace Problem4_12
{
    class Program
    {
        static void Main(string[] args)
        {
            int seed = Environment.TickCount;
            int oddNumber = 0, evenNumber = 0;
            for (int i = 0; i < 5; i++)
            {
                Random rnd = new Random(seed++);
                int randomNumber = rnd.Next(1,101);
                Console.WriteLine(randomNumber);
                if (randomNumber % 2 == 0)
                {
                    evenNumber += 1;
                }
                else
                {
                    oddNumber += 1;
                }
            }
            Console.WriteLine("偶数の数：{0}", evenNumber);
            Console.WriteLine("奇数の数：{0}", oddNumber);
        }
    }
}