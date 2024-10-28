using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurant.Menus
{
    //お菓子メニューの情報を格納するクラス（Menuから派生した子クラス）
    internal class SweetsMenu : Menu
    {
        private bool stock;

        public SweetsMenu(string name, string description, int price, bool stock)
            : base(name, description, price)
        {
            this.stock = stock;
        }
        public bool Stock
        {
            get { return stock; }
        }

        //★(b2) 具象メソッドを実装
        public override string GetNote()
        {
            return stock ? "在庫有" : "";
        }
    }
}
