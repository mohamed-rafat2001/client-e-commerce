import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/interfaces/cartInterface';
import { Product } from 'src/app/interfaces/productInterface';
import { User } from 'src/app/interfaces/userInterface';
import { AdminService } from 'src/app/services/admin/admin.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  product: Product[] = []
  user?: User = {}
  cart: Cart = {}
  constructor(private adminService: AdminService, private authService: AuthService, private cartService: CartService) { }
  allProduct() {
    this.adminService.allProduct().subscribe({
      next: (res: any) => {
        this.product = res
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  rate(rate: any, _id: any, inx: number) {
    this.adminService.ratingProduct({ star: rate.target.value }, _id).subscribe({
      next: (res: any) => {
        return res
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  views(id: any) {
    this.adminService.views(id).subscribe({
      next: (res: any) => {
      },
      error: (err: any) => {

      }
    })
  }

  getUser() {
    this.authService.profile().subscribe({
      next: (res: any) => {
        this.user = res
      },
      error: (err: any) => console.log(err)
    })
  }
  toWishList(id: any) {
    this.authService.addWishList(id).subscribe({
      next: (res: any) => {
        this.user = res
      },
      error: (err: any) => console.log(err)
    })
  }

  add1(id: any) {
    if (this.user) {
      let pro = this.user.wishList?.includes(id)
      if (pro == true) {
        return true
      }
      return false
    }
    else {
      return false
    }
  }
  submit(data: any) {
    this.cartService.addToCart({ products: [{ product: data.product, count: data.count, color: data.color }] }).subscribe({
      next: (res: any) => {
        this.cart = res
        console.log(res)
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }
  ngOnInit(): void {
    this.allProduct()
    this.getUser()
  }

}
