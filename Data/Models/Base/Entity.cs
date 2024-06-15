using System.ComponentModel.DataAnnotations;

namespace Models;

public class Entity : object
{
    public Entity()
    {
        Id = Guid.NewGuid();
    }
    [Key]
    public Guid Id { get; set; }


}

