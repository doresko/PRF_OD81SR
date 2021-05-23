import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Product } from '../product';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  @Input() product?: Product;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location 
  ) { } 

  deleteProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.http.delete("http://localhost:3000/product/"+id) 
   }

  ngOnInit(): void {
  }

}
