import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LigasService } from '../services/ligas.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ligas-form',
  templateUrl: './ligas-form.component.html',
  styleUrls: ['./ligas-form.component.css']
})
export class LigasFormComponent implements OnInit {

  form: FormGroup

  constructor(
    private formBuider: FormBuilder,
    private service: LigasService,
    private snackBar: MatSnackBar) {
    this.form = this.formBuider.group({
      emblema: [null],
      name: [null],
      pontos: [null]

    });
  }

  ngOnInit(): void {
  }

  onSubimit() {
    this.service.save(this.form.value)
                .subscribe(result => console.log(result),
                error => {
                  this.onError()
                });
    //console.log(this.form.value)
  }

  onCancel(){
    console.log(this.form.value)
  }

  private onError(){
    this.snackBar.open('Erro ao salvar time', '', {duration: 5000})
  }

}
