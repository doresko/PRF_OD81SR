import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products: Product[] = [ ]

  constructor(private http: HttpClient) { }

  getProducts(): void {
    this.http.post<Product[]>(window.location.origin+"/products", {responseType: 'text', withCredentials: true}).subscribe(data =>{
      this.products = data
    })

  }
  ngOnInit(): void {
    this.getProducts();
  }
}


