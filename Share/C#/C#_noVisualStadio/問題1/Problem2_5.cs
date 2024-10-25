using System;

namespace Problem2_5
{
    class Program
    {
        static void Main(string[] args)
        {
            string a,b;
            Console.Write("文字列1を入力:");
            a = Console.ReadLine();
            Console.Write("文字列2を入力:");
            b = Console.ReadLine();
            Console.WriteLine("文字列1 + 文字列2 = {0}", a + b);
        }
    }
}