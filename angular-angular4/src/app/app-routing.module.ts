import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { VistaComponent } from './vista/vista.component';

const routes: Routes = [
  {path: "vista", component: VistaComponent},
  {path: "formulario", component: FormularioComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
