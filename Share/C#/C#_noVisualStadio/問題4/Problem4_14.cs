using System;

namespace Problem4_14
{
    class Program
    {
        static void Main(string[] args)
        {
            Random rnd = new Random();
            int randomNumber = rnd.Next(1,11);
            Console.WriteLine("発生した数値：{0}", randomNumber);
            if (randomNumber % 2 == 0)
            {
                for (int i = 0; i < randomNumber; i++)
                {
                    Console.Write("★");
                }
            }
            else
            {
                for (int i = 0; i < randomNumber; i++)
                {
                    Console.Write("☆");
                }
            }
        }
    }
}