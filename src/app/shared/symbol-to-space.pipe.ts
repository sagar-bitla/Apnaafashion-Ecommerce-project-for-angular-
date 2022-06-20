import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'symbolToSpace'
})
export class SymbolToSpacePipe implements PipeTransform {

  transform(value: string,dynamic=""): unknown {
    return value.replace("->",dynamic);
  }

}
