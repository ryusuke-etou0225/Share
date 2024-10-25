using System;

namespace Problem3_18
{
    class Program
    {
        static void Main(string[] args)
        {
            int a;
            Console.Write("温度を入力してください(-10～35)：");
            a = int.Parse(Console.ReadLine());
            if (a < -10 || a > 35)
            {
                Console.WriteLine("適切な値を入力してください。");
            }
            else if (a >= 30)
            {
                Console.WriteLine("摂氏{0}度", a);
                Console.WriteLine("真夏日です。");
            }
            else if (a < 30 && a >= 25)
            {
                Console.WriteLine("摂氏{0}度", a);
                Console.WriteLine("夏日です。");
            }
            else if (a < 0)
            {
                Console.WriteLine("摂氏{0}度", a);
                Console.WriteLine("真冬日です。");
            }
            else
            {
                Console.WriteLine("摂氏{0}度", a);
            }
        }
    }
}