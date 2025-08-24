using System;

namespace Problem3_17
{
    class Program
    {
        static void Main(string[] args)
        {
            int a;
            Console.Write("整数を入力してください(1-100)：");
            a = int.Parse(Console.ReadLine());
            if (a <= 0 || a > 100)
            {
                Console.WriteLine("適切な値を入力してください。");
            }
            else if (a <= 50 && a % 2 == 0)
            {
                Console.WriteLine("50以下の偶数です。");
            }
            else if (a <= 50)
            {
                Console.WriteLine("50以下です。");
            }
            else if (a % 2 == 0)
            {
                Console.WriteLine("偶数です。");
            }
        }
    }
}