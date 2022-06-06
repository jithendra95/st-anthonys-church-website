import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminConsoleComponent } from './admin-console/admin-console.component';
import { AuthGuard, LoginAuthGuard } from './auth-guard';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login',canActivate: [LoginAuthGuard], component: LoginComponent},
  { path: '', canActivate: [AuthGuard], component: AdminConsoleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
