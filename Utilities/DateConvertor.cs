using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Utilities
{
    public static class DateConvertor
    {
        private static PersianCalendar pc = new PersianCalendar();
        public static string GetTimeFormat(int year, int month, int day) 
        {
            string result = year + "/" + month.ToString("00") + "/" + day.ToString("00");
            return result;
        }
        public static string ToShamsi(this DateTime dateTime)
        {
            var result = GetTimeFormat(pc.GetDayOfYear(dateTime), pc.GetMonth(dateTime), pc.GetDayOfMonth(dateTime));
            return result;
        }
    }
}
