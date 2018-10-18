# Examples


.Net Core Entity Framework 
---------------------------
https://docs.microsoft.com/en-us/ef/core/get-started/netcore/new-db-sqlite
Install 
Microsoft.EntityFrameworkCore.Sqlite 
Microsoft.EntityFrameworkCore.Design

create 
file named Model.cs 

using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

inherited
class from DBContext

create
table like Customer   
    public class Customer
    {
        public int ID { get; set; }
        public string Name { get; set; }
    }

add to DBContext class
* table Customer like Customers with DBSet like:
public DbSet<Customer> Customers { get; set; }

* method OnConfiguring like
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Data Source=.;Initial Catalog=TestDB;Integrated Security=True");
        }
