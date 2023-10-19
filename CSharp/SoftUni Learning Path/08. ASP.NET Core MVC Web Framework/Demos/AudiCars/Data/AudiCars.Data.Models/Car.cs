namespace AudiCars.Data.Models
{
    using System;
    using System.Collections.Generic;
    using System.Text;

    using AudiCars.Data.Common.Models;

    public class Car : BaseDeletableModel<int>
    {
        public string Title { get; set; }

        public byte Month { get; set; }

        public ushort Year { get; set; }

        public string Description { get; set; }

        public int ModelId { get; set; }

        public virtual CarModel Model { get; set; }
    }
}
