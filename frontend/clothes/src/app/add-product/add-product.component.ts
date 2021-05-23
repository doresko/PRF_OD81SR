import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from '../product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product: Product[] = []
  cloth_Id: Number
  cloth_name: String
  cloth_desc: String
  cloth_price: Number
  cloth_quantity: Number
  cloth_image: String

  constructor(private http: HttpClient) { 
    this.cloth_Id = 0,
    this.cloth_name = "",
    this.cloth_desc = "",
    this.cloth_price = 0,
    this.cloth_quantity = 0,
    this.cloth_image = ""
  }

  addProduct():  void {
    const tp = {
      cloth_Id : this.cloth_Id,
      cloth_name : this.cloth_name,
      cloth_desc : this.cloth_desc,
      cloth_price : this.cloth_price,
      cloth_quantity : this.cloth_quantity,
      cloth_image : this.cloth_image
    }
    this.http.post(window.location.origin+"/add_product", { product: tp },
    {
      responseType: 'text', 
      withCredentials: true}).subscribe(data =>{
    })
  }
  
  ngOnInit(): void {
  }
}
