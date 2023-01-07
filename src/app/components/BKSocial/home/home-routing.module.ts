import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from '../galeria/galeria.component';
import { LoginComponent } from '../login/login.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {path: '', 
  component: HomeComponent, 
  children:[
    {path: '', component: LoginComponent},
    {path: 'galeria', component: GaleriaComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
