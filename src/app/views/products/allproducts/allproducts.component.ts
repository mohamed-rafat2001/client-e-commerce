import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/productInterface';
import { User } from 'src/app/interfaces/userInterface';
import { AdminService } from 'src/app/services/admin/admin.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  product: Product[] = []
  constructor(private adminService: AdminService, private authService: AuthService) { }
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
        console.log(err)
      }
    })
  }
  user?: User = {}
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

  ngOnInit(): void {
    this.allProduct()
    this.getUser()
  }

}
