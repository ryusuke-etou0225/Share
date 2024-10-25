using System;

namespace Problem5_4
{
    class Program
    {
        static void Main(string[] args)
        {
            int seed = Environment.TickCount;
            int[] data = new int[10];
            string evenNnumber = "50以上の数：";
            string oddNumber = "50以下の数：";
            for (int i = 0; i < 10; i++)
            {
                Random rnd = new Random(seed++);
                int randomNumber = rnd.Next(1,101);
                data[i] = randomNumber;
                Console.Write("{0} ", data[i]);
                if (randomNumber >= 50)
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