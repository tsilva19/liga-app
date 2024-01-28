import { LigasComponent } from './ligas/ligas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LigasFormComponent } from './ligas-form/ligas-form.component';

const routes: Routes = [
  {path: '', component: LigasComponent},
  {path: 'novo', component: LigasFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LigasRoutingModule { }
