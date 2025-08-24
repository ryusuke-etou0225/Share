﻿using Restaurant.Generators; //★(a1) usingディレクティブ
using Restaurant.Menus; //★(a2) usingディレクティブ

namespace Restaurant
{
    internal class Program
    {
        static void Main(string[] args)
        {
            //メニューデータを定義し、Menu配列に格納
            Menu[] menus = new Menu[] {
            new MainMenu("黒毛和牛ステーキ", "ジューシーで柔らかなステーキです。", 3000, false),
            new MainMenu("ベジタブルカレー", "野菜をたっぷりと使った、スパイシーなカレーです。", 2400, true),
            new DrinkMenu("メロンソーダ", "爽やかな甘さが楽しめるメロンソーダです。", 400, true),
            new DrinkMenu("ホットコーヒー", "丁寧に焙煎されたコーヒー豆を使用しています。", 500, false),
            new DessertMenu("チョコレートケーキ", "しっとりとしたチョコレートケーキです。", 600, 4),
            new SweetsMenu("ねるねるねるね", "科学の結晶", 100, true)
            };

            //メニュー一覧をHTMLコードとして出力
            MenuTableGenerator generator = new MenuTableGenerator(menus);
            string tableHtml = generator.GenerateTable();
            Console.WriteLine("<html>");
            Console.WriteLine("<head><title>メニュー</title></head>");
            Console.WriteLine("<body>");
            Console.WriteLine("<h1>メニュー一覧</h1>");
            Console.WriteLine(tableHtml);
            Console.WriteLine("</body>");
            Console.WriteLine("</html>");
        }

        //static void Main(string[] args)
        //{
            //DrinkMenu melonSoda = new DrinkMenu("メロンソーダ", "爽やかな甘さが楽しめるメロンソーダです。", 400, true);
            //DrinkMenu hotCoffee = new DrinkMenu("ホットコーヒー", "丁寧に焙煎されたコーヒー豆を使用しています。", 500, false);
            //IJsonWritable[] drinks = new IJsonWritable[] { melonSoda, hotCoffee };
            //JsonGenerator generator = new JsonGenerator();
            //string json = generator.GenerateJson(drinks);
            //Console.WriteLine(json);
        //}
    }
}   
