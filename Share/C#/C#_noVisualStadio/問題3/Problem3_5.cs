using System;

namespace Problem3_5
{
    class Program
    {
        static void Main(string[] args)
        {
            int a;
            Console.Write("整数値を入力:");
            a = int.Parse(Console.ReadLine());
            if (a > 30 && a <= 70)
            {
                Console.WriteLine("30より大きく70以下です");
            }
        }
    }
}