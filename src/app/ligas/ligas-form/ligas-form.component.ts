import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ligas-form',
  templateUrl: './ligas-form.component.html',
  styleUrls: ['./ligas-form.component.css']
})
export class LigasFormComponent implements OnInit {

  form: FormGroup

  constructor(private formBuider: FormBuilder) {
    this.form = this.formBuider.group({
      emblema: [null],
      name: [null],
      pontos: [null]

    });
  }

  ngOnInit(): void {
  }

  onSubimit() {
    console.log(this.form.value)
  }

  onCancel(){
    console.log(this.form.value)
  }

}
