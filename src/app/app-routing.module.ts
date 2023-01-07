import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { DashbankComponent } from './components/AppBKBank/dashbank/dashbank.component';

const routes: Routes = [
  { path: '', component: PerfilComponent },
  { path: 'bk-bank', component: DashbankComponent },
  { path: 'bk-social', loadChildren: () => import('././components/BKSocial/home/home.module').then((m) => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
