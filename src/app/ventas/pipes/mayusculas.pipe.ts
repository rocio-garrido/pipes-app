import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform(valor: string, ...args: any[]): string {
        console.log('args: ', args);

        return valor.toUpperCase()
    }

}