using System.Collections.Generic;
using System.Text;

namespace AudiCars.Services.Data.Cars
{
    public interface ICarsService
    {
        IEnumerable<TViewModel> GetTopCars<TViewModel>(int count = 5);
    }
}
