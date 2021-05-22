import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
import {Router, NavigationEnd,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.sum = 0
   }

  products: Product[] = []
  sum : number

  ngOnInit(): void {
    var cart = localStorage.getItem('cart');
    if(cart){
      JSON.parse(cart).forEach((product: Product)=>{
        this.products.push(product)
        console.log(product.cloth_name)
        this.sum+=product.cloth_price
      })
    }
  }

  removeFromCart(product: Product){
    var cart = localStorage.getItem("cart");
    if(cart){
      var tmp = JSON.parse(cart)
      tmp.forEach((pr: Product, index: number)=>{
        if(product.cloth_Id == pr.cloth_Id){
          this.sum-=pr.cloth_price
          tmp.splice(index, 1)
          let currentUrl = this.router.url;
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([currentUrl]);
        }
      })
      localStorage.setItem("cart", JSON.stringify(tmp))
      this.ngOnInit()
    }
  }

}
