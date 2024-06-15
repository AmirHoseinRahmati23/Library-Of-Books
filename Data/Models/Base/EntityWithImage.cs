using Data.Models;
using Models.Interfaces;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Utilities;

namespace Models;
public class EntityWithImage : ExtendedEntity, IHaveImage
{
    public EntityWithImage(): this(string.Empty)
    {

    }
    public EntityWithImage(string? Image) : base()
    {
        ImagePath = Image.IfNullEmpty();
    }

    [Display(Name = "تصویر")]
    public string? ImagePath { get; set; }
}
