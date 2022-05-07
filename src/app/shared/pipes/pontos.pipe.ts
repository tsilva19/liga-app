import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pontos'
})
export class PontosPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'Kabum': return 'code';
      case 'PAIN': return 'computer';
    }
    return 'code';
  }

}
