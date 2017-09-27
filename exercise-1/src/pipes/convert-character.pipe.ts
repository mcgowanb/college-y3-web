import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertCharacter'
})
export class ConvertCharacterPipe implements PipeTransform {

  transform(value: any, existing?: string, replace?: any): any {
    return value.replace(existing, replace).toLowerCase();
  } 

}
