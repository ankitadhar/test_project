import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AbstractApiService } from './api.interface';

@Injectable()
export abstract class ApiService implements AbstractApiService {
    abstract onReceiveMessage: EventEmitter<any>;
    abstract getAllAccounts(listAttr): Observable<any>;
    abstract getTotalCount(): Observable<any>;
    abstract getAccountAssets(accountId, listAttr): Observable<any>;
    abstract getAccountCases(accountId, listAttr): Observable<any>;
    abstract getAccountContacts(accountId, listAttr): Observable<any>;
}
