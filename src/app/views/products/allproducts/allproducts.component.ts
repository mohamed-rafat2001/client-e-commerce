import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/productInterface';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.css']
})
export class AllproductsComponent implements OnInit {
  product: Product[] = []
  constructor(private adminService: AdminService) { }
  allProduct() {
    this.adminService.allProduct().subscribe({
      next: (res: any) => {
        this.product = res
        console.log(this.product)
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
  ngOnInit(): void {
    this.allProduct()
  }

}
