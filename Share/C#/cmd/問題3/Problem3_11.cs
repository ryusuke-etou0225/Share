using System;

namespace Problem3_11
{
    class Program
    {
        static void Main(string[] args)
        {
            int a;
            Console.Write("0から100までの数値を入力してください：");
            a = int.Parse(Console.ReadLine());
            if (a < 0)
            {
                Console.WriteLine("範囲外です。");
            }
            else if (a >= 20 && a < 80)
            {
                Console.WriteLine("20以上80未満です。");
            }
            else
            {
                Console.WriteLine("20未満か、80以上です。");
            }
        }
    }
}