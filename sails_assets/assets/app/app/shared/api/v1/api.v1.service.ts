import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../../services/config.service';
import { ApiService } from '../api.service';
import { ApiCommonV1Service } from './api.common.service';
import { ApiAccountsService } from './api.accounts.service';

/**
 * This class provides the api service with methods to load data from servers.
 */
@Injectable()
export class ApiV1Service extends ApiService {

    public onReceiveMessage: EventEmitter<any>;
    private config;

    constructor(private configService: ConfigService,
        private apiCommonV1Service: ApiCommonV1Service,
        private apiAccountService: ApiAccountsService) {
        super();
    }


    initURLs(isJson: boolean) {

    }

    getAllAccounts(listAttr): Observable<any> {
        return this.apiAccountService.getAllAccounts(listAttr);
    }

    getTotalCount(): Observable<any> {
        return this.apiAccountService.getTotalCount();
    }

    getAccountAssets(accountId, listAttr): Observable<any> {
        return this.apiAccountService.getAccountAssets(accountId, listAttr);
    }

    getAccountCases(accountId, listAttr): Observable<any> {
        return this.apiAccountService.getAccountCases(accountId, listAttr);
    }

    getAccountContacts(accountId, listAttr): Observable<any> {
        return this.apiAccountService.getAccountContacts(accountId, listAttr);
    }

}
