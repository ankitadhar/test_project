
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy' })
export class OrderByPipe implements PipeTransform {

  transform(records: Array<any>, args?: any): any {

    if (args.property.indexOf('Date') < 0) {
      return records.sort(function (a, b) {
        if (a['_source'][args.property] < b['_source'][args.property]) {
          return -1 * args.direction;
        }
        else if (a['_source'][args.property] > b['_source'][args.property]) {
          return 1 * args.direction;
        }
        else {
          return 0;
        }
      });
    }
    return records.sort((a: any, b: any) =>
      new Date(a['_source'][args.property]).getTime() - new Date(b['_source'][args.property]).getTime()
    );
  };
}
