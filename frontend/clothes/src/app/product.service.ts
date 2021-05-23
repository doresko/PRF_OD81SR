import { Injectable, Input } from '@angular/core';
import { Product } from './product';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ProductService { 

  @Input() product?: Product;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location
    ) { }


  getProduct(product: Product) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.post<Product>("http://localhost:3000/product/"+id, {responseType: 'text', withCredentials: true, cloth_Id: id}).subscribe(data =>{
    this.product = data;
    return this.product;
  })

   }
}
