import { Component, OnInit, Input} from '@angular/core';
import { Product } from '../product';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
/*import { ProductService } from '../product.service';*/
 
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() product?: Product;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private location: Location 
    ) { }

    getProduct(): void {
     const id = Number(this.route.snapshot.paramMap.get('id'));
      this.http.post<Product>("http://localhost:3000/product/"+id, {responseType: 'text', withCredentials: true, cloth_Id: id}).subscribe(data =>{
      this.product = data})
    }

    addCart(tmp : Product){
      alert("Hozzáadtuk a kosárhoz")
      let cartAll = localStorage.getItem('cart')
      if(cartAll){
        var cart = JSON.parse(cartAll);
        cart.push(tmp)
        localStorage.setItem('cart', JSON.stringify(cart));
      } else {
        let cart = []
        cart.push(tmp)
        localStorage.setItem('cart', JSON.stringify(cart))
      }
    }

  ngOnInit(): void { 
  this.getProduct();
  }
  }
