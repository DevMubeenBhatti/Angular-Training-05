import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogsComponent } from './blogs/blogs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardmainComponent } from './dashboardmain/dashboardmain.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SidenavResponsiveComponent } from './sidenav-responsive/sidenav-responsive.component';
import { CreateUserRoutingModule } from './users/create-user/create-user-routing.module';
import { DetailUserRoutingModule } from './users/detail-user/detail-user-routing.module';
import { ListUserRoutingModule } from './users/list-user/list-user-routing.module';
import { UpdateUserRoutingModule } from './users/update-user/update-user-routing.module';

const routes: Routes = [
  {
    path: "",
    component: DashboardmainComponent,
    children: [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard-routing.module').then((m) => m.DashboardRoutingModule) },
      { path: 'home', loadChildren: () => import('./home/home.routing.module').then((m) => m.HomeComponentRoutingModule) },
      { path: 'blogs', loadChildren: () => import('./blogs/blog.routing.module').then((m) => m.BlogsComponentRoutingModule) },
      { path: 'aboutus', loadChildren: () => import('./aboutus/aboutus.routing.module').then((m) => m.BlogsComponentRoutingModule) },
      { path: 'training/databindin', loadChildren: () => import('./training/databinding/databinding.routing.module').then((m) => m.DataBindingComponentRoutingModule) },
      { path: 'training/dircetive', loadChildren: () => import('./training/directive/directive.routing.module').then((m) => m.DataBindingComponentRoutingModule) },
      { path: 'training/dircetiveexample', loadChildren: () => import('./training/directive-example/directive-example.routing.module').then((m) => m.DataBindingExampleComponentRoutingModule) },
      { path: 'user/list-user', loadChildren: () => import('./users/list-user/list-user-routing.module').then((m)=>ListUserRoutingModule)},
      { path: 'user/create-user', loadChildren: () => import('./users/list-user/list-user-routing.module').then((m)=>CreateUserRoutingModule)},
      { path: 'user/update-user/:userID', loadChildren: () => import('./users/update-user/update-user-routing.module').then((m)=>UpdateUserRoutingModule)},
      { path: 'user/detail-user/:userID', loadChildren: () => import('./users/detail-user/detail-user-routing.module').then((m)=>DetailUserRoutingModule)}
    ]
  },
  { path: 'sidenav', component: SidenavResponsiveComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
