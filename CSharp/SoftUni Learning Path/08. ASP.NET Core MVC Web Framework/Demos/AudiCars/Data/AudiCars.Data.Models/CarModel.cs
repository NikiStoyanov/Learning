namespace AudiCars.Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    using AudiCars.Data.Common.Models;

    public class CarModel : BaseModel<int>
    {
        public string Name { get; set; }
    }
}
