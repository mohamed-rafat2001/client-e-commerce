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

const routes: Routes = [
  //nav-bar links
  { path: '', component: AllproductsComponent },
  { path: 'singUp', component: SinUpComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'about', component: AboutComponent },
  //profile
  { path: 'updateProfile', component: UpdateProfileComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },

  { path: 'resetPassword', component: ResetPasswordComponent },
  //wishList

  { path: 'wishList', component: GetComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
