using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurant.Menus
{
    //デザートメニューの情報を格納するクラス(Menuから派生した子クラス)
    internal class DessertMenu : Menu
    {
        private int sweetnessLevel;

        public DessertMenu(string name, string description, int price, int sweetnessLevel)
            : base(name, description, price)
        {
            this.sweetnessLevel = sweetnessLevel;
        }

        public int SweetnessLevel
        {
            get { return sweetnessLevel; }
        }

        //★(b3) 具象メソッドを実装
        public override string GetNote()
        {
            return $"（甘さレベル{sweetnessLevel}）";
        }
    }
}
