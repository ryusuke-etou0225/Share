using System;

namespace Problem5_5
{
    class Program
    {
        static void Main(string[] args)
        {
            int seed = Environment.TickCount;
            int[] data = new int[10];
            string evenNnumber = "3の倍数：";
            string oddNumber = "3の倍数以外の数：";
            for (int i = 0; i < 10; i++)
            {
                Random rnd = new Random(seed++);
                int randomNumber = rnd.Next(1,11);
                data[i] = randomNumber;
                Console.Write("{0} ", data[i]);
                if (randomNumber % 3 == 0)
                {
                    evenNnumber += randomNumber.ToString() + " ";
                }
                else
                {
                    oddNumber += randomNumber.ToString() + " ";
                }
            }
            Console.WriteLine();
            Console.WriteLine(evenNnumber);
            Console.WriteLine(oddNumber);
        }
    }
}