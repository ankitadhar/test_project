import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../../services/config.service';
import { ApiBaseService } from '../api.base.service';

@Injectable()
export class ApiAccountsService extends ApiBaseService {

    private queryServer: string;
    private accountsURL: string;
    private assetsURL: string;
    private accountObjURL: string;
    private casesURL: string;
    private contactsURL: string;

    constructor(private _http: Http, configService: ConfigService) {
        super(_http, configService);
        this.queryServer = this.queryURL;
        this.buildURLs();
    }

    buildURLs() {
        this.accountsURL = this.queryServer + '/sfdcaccounts';
        this.accountObjURL = this.queryServer + '/sfdcaccount';
        this.assetsURL = this.queryServer + '/sfdcassets';
        this.casesURL = this.queryServer + '/sfdccases';
        this.contactsURL = this.queryServer + '/sfdccontacts';
    }

    getAllDashContent(listAttr): Observable<any> {
        const service = this;
        let sortingDir = 'asc';
        let fetchURL = '';
        if (listAttr['isDesc']) {
            sortingDir = 'desc';
        }
        switch (listAttr['table']) {
            case 'accounts': fetchURL = service.accountsURL + '?index=' + listAttr['index'] + '&size=' + listAttr['size']
                + '&sortby=' + listAttr['sortingColumn'] + '&orderby=' + sortingDir;
                break;
            case 'assets': fetchURL = service.assetsURL + '?index=' + listAttr['index'] + '&size=' + listAttr['size']
                + '&sortby=' + listAttr['sortingColumn'] + '&orderby=' + sortingDir;
                break;
            case 'cases': fetchURL = service.casesURL + '?index=' + listAttr['index'] + '&size=' + listAttr['size']
                + '&sortby=' + listAttr['sortingColumn'] + '&orderby=' + sortingDir;
                break;
            case 'contacts': fetchURL = service.contactsURL + '?index=' + listAttr['index'] + '&size=' + listAttr['size']
                + '&sortby=' + listAttr['sortingColumn'] + '&orderby=' + sortingDir;
                break;
        }
        return service.get(fetchURL);
    }

    getAccountData(accountId): Observable<any> {
        const service = this;
        const fetchAccountURL = service.accountsURL + '?id=' + accountId;
        return service.get(fetchAccountURL);
    }


    getAccountAssets(accountId, listAttr): Observable<any> {
        const service = this;
        let sortingDir = 'asc';
        if (listAttr['isDesc']) {
            sortingDir = 'desc';
        }
        const fetchAccountAssetsURL = service.accountObjURL + '/' + accountId + '/assets?index='
            + listAttr['index'] + '&size=' + listAttr['size']
            + '&sortby=' + listAttr['sortingColumn'] + '&orderby=' + sortingDir;
        return service.get(fetchAccountAssetsURL);
    }

    getAccountCases(accountId, listAttr): Observable<any> {
        const service = this;
        let sortingDir = 'asc';
        if (listAttr['isDesc']) {
            sortingDir = 'desc';
        }
        const fetchAccountAssetsURL = service.accountObjURL + '/' + accountId + '/cases?index='
            + listAttr['index'] + '&size=' + listAttr['size']
            + '&sortby=' + listAttr['sortingColumn'] + '&orderby=' + sortingDir;
        return service.get(fetchAccountAssetsURL);
    }

    getAccountContacts(accountId, listAttr): Observable<any> {
        const service = this;
        let sortingDir = 'asc';
        if (listAttr['isDesc']) {
            sortingDir = 'desc';
        }
        const fetchAccountAssetsURL = service.accountObjURL + '/' + accountId + '/contacts?index='
            + listAttr['index'] + '&size=' + listAttr['size']
            + '&sortby=' + listAttr['sortingColumn'] + '&orderby=' + sortingDir;
        return service.get(fetchAccountAssetsURL);
    }
}
