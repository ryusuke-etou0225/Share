using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Restaurant.Menus
{
    internal interface IJsonWritable
    {
        string ToJson();
    }
}
