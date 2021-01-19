import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'Demo'
})

export class Demo implements PipeTransform{
  transform(val:string){
    return val.toLowerCase();
  }
}






