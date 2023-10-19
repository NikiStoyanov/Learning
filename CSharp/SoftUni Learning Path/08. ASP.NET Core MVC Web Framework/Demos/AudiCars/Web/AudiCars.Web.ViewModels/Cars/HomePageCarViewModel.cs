using System;
using System.Collections.Generic;
using System.Text;
using AudiCars.Data.Models;
using AudiCars.Services.Mapping;
using AutoMapper;

namespace AudiCars.Web.ViewModels.Cars
{
    public class HomePageCarViewModel : IMapFrom<Car>, IHaveCustomMappings
    {
        public string Title { get; set; }

        public string ModelName { get; set; }

        public string YearAndMonth { get; set; }

        public void CreateMappings(IProfileExpression configuration)
        {
            configuration.CreateMap<Car, HomePageCarViewModel>()
                .ForMember(
                    x => x.YearAndMonth,
                    opt => opt.MapFrom(x => x.Month + "/" + x.Year));
        }
    }
}
