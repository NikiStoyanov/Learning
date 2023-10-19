using System;
using System.Collections.Generic;
using System.Linq;
using AudiCars.Data;
using AudiCars.Services.Mapping;

namespace AudiCars.Services.Data.Cars
{
    public class CarsService : ICarsService
    {
        private readonly ApplicationDbContext context;

        public CarsService(ApplicationDbContext context)
        {
            this.context = context;
        }

        public IEnumerable<TViewModel> GetTopCars<TViewModel>(int count = 5)
        {
            var cars = this.context
                .Cars
                .OrderByDescending(x => x.CreatedOn)
                .Take(count)
                .To<TViewModel>()
                .ToList();

            return cars;
        }
    }
}