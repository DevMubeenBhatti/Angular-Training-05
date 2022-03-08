import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DatabindingComponent } from "./databinding.component";

const routes: Routes = [
	{
		path: '',
		component: DatabindingComponent
	}
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DataBindingComponentRoutingModule { }