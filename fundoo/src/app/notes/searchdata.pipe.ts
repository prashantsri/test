import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "searchdata"
})
export class SearchdataPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!args) return value;
    return value.filter(items => {
      return (
        items.notes.includes(args) == true || items.title.includes(args) == true
      );
    });
  }
}
