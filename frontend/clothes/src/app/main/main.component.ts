import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpClient } from "@angular/common/http"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  products: Product[] = [
    /*{cloth_Id:1, cloth_name: "Alma", cloth_desc: "abcde", cloth_image:"abcde", cloth_price: 3, cloth_quantity:3}  */
  ]

  constructor(private http: HttpClient) { }

  getProducts(): void {
    this.http.post<Product[]>("http://localhost:3000/products", {responseType: 'text', withCredentials: true}).subscribe(data =>{
      this.products = data
    })

  }
  ngOnInit(): void {
    this.getProducts();
  }
}


