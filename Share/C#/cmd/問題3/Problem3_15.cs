using System;

namespace Problem3_15
{
    class Program
    {
        static void Main(string[] args)
        {
            int a;
            Console.Write("点数(1-100)：");
            a = int.Parse(Console.ReadLine());
            if (a <= 0 || a > 100)
            {
                Console.WriteLine("範囲外");
            }
            else if (a >= 80)
            {
                Console.WriteLine("優");
            }
            else if (a >= 70)
            {
                Console.WriteLine("良");
            }
            else if (a >= 60)
            {
                Console.WriteLine("可");
            }
            else
            {
                Console.WriteLine("不可");
            }
        }
    }
}