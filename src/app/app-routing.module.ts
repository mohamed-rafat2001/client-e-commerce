import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinUpComponent } from './auth/sin-up/sin-up.component';
import { LoginComponent } from './auth/login/login.component';
import { ProfileComponent } from './user/profile/profile.component';
import { AboutComponent } from './views/about/about.component';
import { AllproductsComponent } from './views/products/allproducts/allproducts.component';
import { UpdateProfileComponent } from './user/update-profile/update-profile.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { GetComponent } from './user/wishList/get/get.component';
import { AuthGardeService } from './services/authGarde/auth-garde.service';
import { AdminComponent } from './admin/admin.component';
import { AllAdminsComponent } from './admin/all-admins/all-admins.component';
import { AllUsersComponent } from './admin/all-users/all-users.component';
import { AddProductComponent } from './admin/productCtrl/add-product/add-product.component';
import { AllProductListComponent } from './admin/productCtrl/all-product-list/all-product-list.component';
import { UpdateProductComponent } from './admin/productCtrl/update-product/update-product.component';
import { SingleproductComponent } from './views/products/singleproduct/singleproduct.component';

const routes: Routes = [
  //admin
  { path: 'admin', component: AdminComponent },
  { path: 'admin/allAdmins', component: AllAdminsComponent },
  { path: 'admin/allUsers', component: AllUsersComponent },
  { path: 'admin/addProduct', component: AddProductComponent },
  { path: 'admin/productList', component: AllProductListComponent },
  { path: 'admin/updateProduct/:id', component: UpdateProductComponent },
  { path: 'singleProduct/:id', component: SingleproductComponent },



  //nav-bar links
  { path: '', component: AllproductsComponent },
  { path: 'singUp', component: SinUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGardeService] },
  { path: 'about', component: AboutComponent },
  //profile
  { path: 'updateProfile', component: UpdateProfileComponent, canActivate: [AuthGardeService] },
  { path: 'forgotPassword', component: ForgotPasswordComponent },

  { path: 'resetPassword', component: ResetPasswordComponent, canActivate: [AuthGardeService] },
  //wishList
  { path: 'wishList', component: GetComponent, canActivate: [AuthGardeService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
