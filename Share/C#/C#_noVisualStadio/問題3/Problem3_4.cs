using System;

namespace Problem3_4
{
    class Program
    {
        static void Main(string[] args)
        {
            int a;
            Console.Write("整数値を入力:");
            a = int.Parse(Console.ReadLine());
            if (a <= 20 || a >= 80)
            {
                Console.WriteLine("20以下か80以上の値です");
            }
        }
    }
}