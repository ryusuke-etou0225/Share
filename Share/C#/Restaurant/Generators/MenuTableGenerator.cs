﻿using Restaurant.Menus;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurant.Generators
{
    //メニューデータ配列からHTMLテーブルを生成するクラス
    internal class MenuTableGenerator
    {
        private Menu[] menus;

        public MenuTableGenerator(Menu[] menus)
        {
            this.menus = menus;
        }

        public string GenerateTable()
        {
            string table = "<table border='1'>";
            table += "<tr><th>メニュー名</th><th>価格(税込み)</th><th>説明</th><th>補足</th></tr>\n";
            foreach (Menu menu in menus)
            {
                table += "<tr>";
                table += $"<td>{menu.Name}</td>";
                table += $"<td>{menu.GetPriceWithTax()}円</td>";
                table += $"<td>{menu.Description}</td>";
                table += $"<td>{menu.GetNote()}</td>"; //★(c) 抽象メソッドを呼び出す
                table += "</tr>\n";
                //※ +演算子で多数の文字列を連結させていくのは効率が悪いため、
                //    本当はStringBuilderクラスを使った方が良い メモ
            }
            table += "</table>";
            return table;
        }
    }
}
