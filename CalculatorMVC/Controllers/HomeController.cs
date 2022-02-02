using CalculatorMVC.Models;
using Microsoft.AspNetCore.Mvc;

namespace CalculatorMVC.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Add(decimal value1, decimal value2)
        {
            return Json( new
            {
                result = CalculationModel.Add(value1, value2)
            });                
        }

        [HttpPost]
        public ActionResult Subtract(decimal value1, decimal value2)
        {
            return Json(new
            {
                result = CalculationModel.Subtract(value1, value2)
            });
        }

        [HttpPost]
        public ActionResult Multiply(decimal value1, decimal value2)
        {
            return Json(new
            {
                result = CalculationModel.Multiply(value1, value2)
            }); 
        }

        [HttpPost]
        public ActionResult Divide(decimal value1, decimal value2)
        {
            return Json(new
            {
                result = CalculationModel.Divide(value1, value2)
            });
        }
    }
}