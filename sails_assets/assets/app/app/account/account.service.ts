import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../shared/index';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {

    constructor(public apiService: ApiService) {
    }

    getAccountAssets(accountId, listAttr) {
        return this.apiService.getAccountAssets(accountId, listAttr).map((res: any) => res);
    }

    getAccountCases(accountId, listAttr) {
        return this.apiService.getAccountCases(accountId, listAttr).map((res: any) => res);
    }

    getAccountContacts(accountId, listAttr) {
        return this.apiService.getAccountContacts(accountId, listAttr).map((res: any) => res);
    }

    getTotalCount() {
        return this.apiService.getTotalCount().map((res: any) => res);
    }


}
