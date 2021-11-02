import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtros'
})
export class FiltrosPipe implements PipeTransform {

  transform(value: any, arg: any): any {

    /* compruebo que si el argumento esta vacio o es menor a 3*/

    if (arg === '' || arg.length < 3) return value;
    const resultPosts = [];

    /*compruebo que coincida lo que se escribe con el argumento*/
    
    for (const post of value) {
      if (post.title.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
    };
    return resultPosts;
  }

}
