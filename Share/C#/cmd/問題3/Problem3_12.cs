using System;

namespace Problem3_12
{
    class Program
    {
        static void Main(string[] args)
        {
            int a;
            Console.Write("数値を入力してください：");
            a = int.Parse(Console.ReadLine());
            if (a > 0)
            {
                Console.WriteLine("正の値です。");
            }
            else if (a < 0)
            {
                Console.WriteLine("負の値です。");
            }
            else
            {
                Console.WriteLine("0です。");
            }
        }
    }
}