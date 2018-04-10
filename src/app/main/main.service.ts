import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../shared/index';
import 'rxjs/add/operator/map';

@Injectable()
export class MainService {

    constructor(public apiService: ApiService) {
    }

    getAllDashContent(listAttr) {
        const service = this;
        return service.apiService.getAllDashContent(listAttr).map((res: any) => service.restructureForAction(res));
    }

    restructureForAction(res) {
        if (res['hits'].length > 1) {
            res['hits'].map(function (item) {
                item['actionView'] = false;
            });
        }
        return res;
    }
}
