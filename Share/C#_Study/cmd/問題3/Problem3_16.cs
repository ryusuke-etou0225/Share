using System;

namespace Problem3_16
{
    class Program
    {
        static void Main(string[] args)
        {
            int a;
            Console.Write("整数値を入力：");
            a = int.Parse(Console.ReadLine());
            if (a % 2 == 0 && a % 3 == 0)
            {
                Console.WriteLine("2と3の公倍数です。");
            }
            else if (a % 2 == 0)
            {
                Console.WriteLine("2の倍数です。");
            }
            else if (a % 3 == 0)
            {
                Console.WriteLine("3の倍数です。");
            }
        }
    }
}