import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LigasRoutingModule } from './ligas-routing.module';
import { LigasComponent } from './ligas/ligas.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { LigasFormComponent } from './ligas-form/ligas-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LigasComponent,
    LigasFormComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    LigasRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class LigasModule { }
