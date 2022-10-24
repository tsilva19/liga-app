import { LigasService } from './../services/ligas.service';
import { Liga } from './../model/liga';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-ligas',
  templateUrl: './ligas.component.html',
  styleUrls: ['./ligas.component.css']
})
export class LigasComponent implements OnInit {

  ligas$:Observable <Liga[]>;
  //ligas: Liga[] = [];

  displayedColumns = ['emblema', 'name', 'pontos', 'actions' ];


  constructor(
    private ligasService: LigasService,
    public dialog: MatDialog
    ) {
      var myStatus = ["NO","EG","AB","EX"];
      console.log(this.formatQueryStringURLParamArray("status", myStatus));
      console.log(this.formatQueryStringURLParamArray("status[]", myStatus));

   this.ligas$  = this.ligasService.lista()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar tabela')
        return of([])
      })
    )
   // this.ligasService.lista().subscribe(ligas => this.ligas = ligas )
  }

  onError(errorMsg: string) {
       this.dialog.open(ErrorDialogComponent,{
          data: errorMsg
       });

  }

  ngOnInit(): void {

  }

  formatQueryStringURLParamArray(key: any, array: any){
    var param = "";
    console.log(array)
    for(var item in array){

        if(param.length > 0)
            param += "&";
        param += key + "=" + array[item];
    }
    return param;
}

}
