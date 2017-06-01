import {Injectable, Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'Myfilter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[], args: any): any {
    return items.filter(item => item.displayValue.indexOf(args) !== -1);
  }
}
