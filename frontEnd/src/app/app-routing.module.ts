import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransacoesFormComponent } from './transacoes-form/transacoes-form.component';
import { TransacoesComponent } from './transacoes/transacoes.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: TransacoesComponent},
  {path: 'add', component: TransacoesFormComponent },
  {path: 'edit/:id', component: TransacoesFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
