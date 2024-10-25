using System;

namespace Problem5_7
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] a = new int[5];
            int seed = Environment.TickCount;
            for (int i = 0; i < 5; i++)
            {
                Random rnd = new Random(seed++);
                int randomNumber = rnd.Next(1,11);
                a[i] = randomNumber;
            }
            int sum = 0, ave = 0;
            foreach (int item in a)
            {
                Console.Write("{0} ", item);
                sum += item;
                ave += item;
            }
            Console.WriteLine();
            Console.WriteLine();
            Console.WriteLine("合計値：{0}", sum);
            Console.WriteLine("平均値：{0}", ave / a.Length);
            Console.WriteLine();
            string big = "平均値より大きい数：";
            string smo = "平均値より小さい数：";
            foreach (int item2 in a)
            {
                if (ave / a.Length < item2)
                {
                    big += item2.ToString() + " ";
                }
                else if (ave > item2)
                {
                    smo += item2.ToString() + " ";
                }
            }
            Console.WriteLine(big);
            Console.WriteLine(smo);
        }
    }
}