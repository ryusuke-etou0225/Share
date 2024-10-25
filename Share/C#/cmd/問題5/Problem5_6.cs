using System;

namespace Problem5_6
{
    class Program
    {
        static void Main(string[] args)
        {
            int seed = Environment.TickCount;
            int[] data = new int[10];
            int max = 0, min = 11 , ave = 0;
            for (int i = 0; i < 10; i++)
            {
                Random rnd = new Random(seed++);
                int randomNumber = rnd.Next(1,11);
                data[i] = randomNumber;
                Console.Write("{0} ", data[i]);
                if (randomNumber > max)
                {
                    max = randomNumber;
                }
                else if (randomNumber < min)
                {
                    min = randomNumber;
                }
                ave += randomNumber;
            }
            Console.WriteLine();
            Console.WriteLine("最大値：{0}", max);
            Console.WriteLine("最小値：{0}", min);
            Console.WriteLine("平均値：{0}", ave / 10);
        }
    }
}