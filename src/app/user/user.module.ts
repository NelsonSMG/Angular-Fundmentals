import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const userRoutes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: []
})
export class UserModule { }
