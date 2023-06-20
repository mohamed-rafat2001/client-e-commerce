import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/interfaces/cartInterface';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-single-cart',
  templateUrl: './single-cart.component.html',
  styleUrls: ['./single-cart.component.css']
})
export class SingleCartComponent implements OnInit {

  constructor(private cartService: CartService) { }
  cart: any = []
  totalPrice: number = 0
  totalProducts: number = 0
  singleCart() {
    this.cartService.getCart().subscribe({
      next: (res: any) => {
        this.cart = res.products
        this.totalPrice = res.totalPriceCart
        this.totalProducts = res.totalProduct
        console.log(this.totalPrice)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
    this.singleCart()
  }

}
