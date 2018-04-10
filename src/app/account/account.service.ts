import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../shared/index';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {

    constructor(public apiService: ApiService) {
    }

    getAccountData(accountId) {
        const service = this;
        return service.apiService.getAccountData(accountId).map((res: any) => res);
    }

    getAccountAssets(accountId, listAttr) {
        const service = this;
        return service.apiService.getAccountAssets(accountId, listAttr).map(res => service.restructureForAction(res));
    }

    restructureForAction(res) {
        if (res['hits'].length > 1) {
            res['hits'].map(function (item) {
                item['actionView'] = false;
            });
        }
        return res;
    }

    getAccountCases(accountId, listAttr) {
        const service = this;
        return service.apiService.getAccountCases(accountId, listAttr).map((res: any) => res);
    }

    getAccountContacts(accountId, listAttr) {
        const service = this;
        return service.apiService.getAccountContacts(accountId, listAttr).map((res: any) => res);
    }
}
