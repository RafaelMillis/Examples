using System;
using System.Collections.Generic;
using System.IO;
using Newtonsoft.Json;
using TestModels;

namespace TestRepository
{
    public class Repo
    {
        public List<Customer> GetCustomers()
        {
            return LoadJson("data/customers.json");
        }

        public List<Customer> LoadJson(string fileName)
        {
            using (StreamReader r = new StreamReader(fileName))
            {
                string json = r.ReadToEnd();
                Customers = JsonConvert.DeserializeObject<List<Customer>>(json);
            }

            return Customers;
        }


        List<Customer> Customers;
    }

}
