import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterTable'
})
export class FilterTablePipe implements PipeTransform {

  transform(items: any, value: any): any {

    if (!items) {
      return []
    }

    if (!value) {
      return items
    }

    return items.filter(item => this.filtroPorExressao(item, value))
  }


  filtroPorExressao(item, value) {
    for (let column in item) {
      item.hasOwnProperty(column)
      if (typeof item[column] === "string") {
        if (item[column].toLowerCase().includes(value.toLowerCase())) {
          return true;
        }
      } else if (typeof item[column] === "number") {
        if (item[column] == value) {
          return true;
        }
      }
    }
  }

}
