import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mapValues' })
export class MapValuesPipe implements PipeTransform {
    transform(value: any): Object[] {
        let returnArray = [];

        value.forEach((entryVal, entryKey) => {
            console.log(entryVal);
            returnArray.push(entryVal);
        });
        return returnArray;
    }
}
