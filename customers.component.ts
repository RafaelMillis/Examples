import { Component, OnInit } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import { Customer } from '../interfaces/customer' 
import { DataService } from '../services/data/data.service'

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];
  public selectedCustomer: Customer;
  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.getCustomerData();
  }

  getCustomerData(): void {
    this.dataService.getCustomersData().subscribe(customers => this.customers = customers);
  }

  onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
    console.log("customer :" + customer.id + " " + customer.name);
  }
}
