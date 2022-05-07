import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LigasRoutingModule } from './ligas-routing.module';
import { LigasComponent } from './ligas/ligas.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LigasComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    LigasRoutingModule,
    SharedModule
  ]
})
export class LigasModule { }
