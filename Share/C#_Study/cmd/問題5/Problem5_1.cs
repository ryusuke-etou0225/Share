using System;

namespace Problem5_1
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] arg = new int[7];
            int seed = Environment.TickCount;
            for (int i = 0; i < 7; i++)
            {
            Random rnd = new Random(seed++);
            int randomNumber = rnd.Next(1,11);
            arg[i] = randomNumber;
            Console.Write("a[{0}]={1} ", i, arg[i]);
            }
        }
    }
}