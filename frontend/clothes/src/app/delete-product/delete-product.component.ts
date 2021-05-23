import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from '@angular/router';
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
    private location: Location,
    private router: Router
  ) { } 

   deleteProduct(){
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.http.post(window.location.origin+"/deleteProduct", {cloth_Id: id},{responseType: 'text', withCredentials: true}).subscribe(data => {
      console.log(data)
    })
    this.router.navigate(["/appadmin"])
    this.ngOnInit()
  }

  ngOnInit(): void { 
  }

}
