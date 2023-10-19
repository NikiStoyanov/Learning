using AudiCars.Services.Data.Cars;
using AudiCars.Web.ViewModels.Cars;

namespace AudiCars.Web.Controllers
{
    using System.Diagnostics;

    using AudiCars.Web.ViewModels;

    using Microsoft.AspNetCore.Mvc;

    public class HomeController : BaseController
    {
        private readonly ICarsService carsService;

        public HomeController(ICarsService carsService)
        {
            this.carsService = carsService;
        }

        public IActionResult Index()
        {
            var cars = this.carsService.GetTopCars<HomePageCarViewModel>(10);
            return this.View(cars);
        }

        public IActionResult Privacy()
        {
            return this.View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return this.View(
                new ErrorViewModel { RequestId = Activity.Current?.Id ?? this.HttpContext.TraceIdentifier });
        }
    }
}
