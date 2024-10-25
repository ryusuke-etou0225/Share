using System;

namespace Problem3_13
{
    class Program
    {
        static void Main(string[] args)
        {
            int a;
            Console.Write("1から3の値を入力（1:グー 2:パー 3:チョキ):");
            a = int.Parse(Console.ReadLine());
            switch (a)
            {
                case 1:
                    Console.WriteLine("グー");
                    break;
                case 2:
                    Console.WriteLine("パー");
                    break;
                case 3:
                    Console.WriteLine("チョキ");
                    break;
                default:
                    Console.WriteLine("正しい値ではありません");
                    break;
            }
        }
    }
}