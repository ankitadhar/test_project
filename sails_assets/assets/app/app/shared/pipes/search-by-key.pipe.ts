import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchByKey' })

export class SearchByKeyPipe implements PipeTransform {
    transform(items: any[], args: any[]) {
        return items.filter(
            item => item[args[1]].indexOf(args[0]) !== -1
        );
    }
}
