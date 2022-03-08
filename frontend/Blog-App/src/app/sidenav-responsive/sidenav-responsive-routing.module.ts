import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SidenavResponsiveComponent } from "./sidenav-responsive.component";
// import { DashboardComponent } from "./dashboard.component";


const routes: Routes = [
	{
		path: '',
		component: SidenavResponsiveComponent
	}
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SideNavResponsiveRoutingModule{}