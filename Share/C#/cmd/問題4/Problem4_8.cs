using System;

namespace Problem4_8
{
    class Program
    {
        static void Main(string[] args)
        {
            int a = 0;
            while (true)
            {
                Console.Write("0以上の数値を入力してください:");
                a = int.Parse(Console.ReadLine());
                if (a < 0)
                {
                    Console.WriteLine("終了します");
                    break;
                }
                else{
                    Console.WriteLine(a);
                }
            }
        }
    }
}