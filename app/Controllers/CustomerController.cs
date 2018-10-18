using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using TestModels;
using TestRepository;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TestWebApplication.Controllers
{
    [Route("api/[controller]")]
    public class CustomerController : Controller
    {

        [HttpGet("[action]")]
        public List<Customer> All()
        {
            Repo repo = new Repo();
            return repo.GetCustomers();
        }
    }
}
