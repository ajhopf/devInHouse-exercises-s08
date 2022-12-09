import { NgModule } from '@angular/core'
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";


const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full'
	},
	{
		path: 'home',
		children: [
			{
				path: '',
				component: HomeComponent
			},
			{
				path: 'lidos',
				component: HomeComponent
			},
			{
				path: 'nao-lidos',
				component: HomeComponent
			},
			{
				path: 'todos',
				component: HomeComponent
			}
		]
	},
	{
		path: 'about',
		component: AboutComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule {
}