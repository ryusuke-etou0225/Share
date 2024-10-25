using System;

namespace Problem3_2
{
    class Program
    {
        static void Main(string[] args)
        {
            int a;
            Console.Write("整数値を入力:");
            a = int.Parse(Console.ReadLine());
            if (a != 4)
            {
                Console.WriteLine("4ではありません");
            }
        }
    }
}