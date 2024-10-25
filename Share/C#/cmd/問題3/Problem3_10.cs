using System;

namespace Problem3_10
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
            if (a == b)
            {
                Console.WriteLine("２つの文字列は等しい");
            }
            else
            {
                Console.WriteLine("２つの文字列は等しくない");
            }
        }
    }
}