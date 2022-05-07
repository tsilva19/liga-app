import { AppMaterialModule } from './app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { PontosPipe } from './pipes/pontos.pipe';



@NgModule({
  declarations: [

    ErrorDialogComponent,
     PontosPipe
  ],
  imports: [
    AppMaterialModule,
    CommonModule
  ],
  exports:[ErrorDialogComponent, PontosPipe]
})
export class SharedModule { }
