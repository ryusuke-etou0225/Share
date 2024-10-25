using System;

namespace Problem3_14
{
    class Program
    {
        static void Main(string[] args)
        {
            int a, b;
            Console.WriteLine("a,bに1から10までの数値を入力してください。");
            Console.Write("a=");
            a = int.Parse(Console.ReadLine());
            Console.Write("b=");
            b = int.Parse(Console.ReadLine());
            if (a > 10 || a <= 0 || b > 10 || b <= 0)
            {
                Console.WriteLine("範囲外です。");
            }
            else if (a == b)
            {
                Console.WriteLine("等しいです。");
            }
            else if (a < b)
            {
                Console.WriteLine("bのほうが大きいです。");
            }
            else
            {
                Console.WriteLine("aのほうが大きいです。");
            }
        }
    }
}