import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }
  url: string = 'http://localhost:4000/'
  //get all admins
  Admins() {
    return this.http.get(this.url + 'admins')
  }
  //get all users
  Users() {
    return this.http.get(this.url + 'users')
  }
  //get single user
  singlUser(id: any) {
    return this.http.get(this.url + 'user/' + id)
  }
  //search about user
  searchUser() {
    return this.http.get(this.url + 'user')
  }
  //delete user
  deleteUser(id: any) {
    return this.http.delete(this.url + 'user/' + id)
  }
  //block && unBlock user
  BlockUser(id: any) {
    return this.http.patch(this.url + 'blockUser/' + id, '')
  }
  //get all orders
  Orders() {
    return this.http.get(this.url + 'orders')
  }
  //search in order by admin
  Order() {
    return this.http.get(this.url + 'admin/orders')
  }
  // update status order
  statusOrder(id: any, body: any) {
    return this.http.patch(this.url + 'order/status/' + id, body)
  }
  // delete all orders
  deleteOrders() {
    return this.http.delete(this.url + 'orders')
  }
  //add product
  addProduct(body: any) {
    return this.http.post(this.url + 'product', body)
  }
  //get single product
  getProduct(id: any) {
    return this.http.get(this.url + 'product/' + id)
  }
  //update product
  updateProduct(body: any, id: any) {
    return this.http.patch(this.url + 'product/' + id, body)
  }
  //delete product
  deleteProduct(id: any) {
    return this.http.delete(this.url + 'product/' + id)
  }
  //get all product
  allProduct() {
    return this.http.get(this.url + 'allProduct')
  }
  //user rating
  ratingProduct(body: any, id: any) {
    return this.http.patch(this.url + 'rating/' + id, body)
  }
  views(id: any) {
    return this.http.get(this.url + 'product /' + id)
  }
}
