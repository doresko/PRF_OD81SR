import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  products: Product[] = []

  constructor(private http: HttpClient) {  }
 
  getProducts(): void {
    this.http.post<Product[]>("http://localhost:3000/products", {responseType: 'text', withCredentials: true}).subscribe(data =>{
      this.products = data
    })

  }

  ngOnInit(): void {
    this.getProducts();
  }

}
