using System;

namespace Problem3_3
{
    class Program
    {
        static void Main(string[] args)
        {
            int a;
            Console.Write("整数値を入力:");
            a = int.Parse(Console.ReadLine());
            if (a < 50)
            {
                Console.WriteLine("50未満です");
            }
        }
    }
}