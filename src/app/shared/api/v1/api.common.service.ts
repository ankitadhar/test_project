import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ConfigService } from '../../services/config.service';
import { ApiBaseService } from '../api.base.service';
import 'rxjs/add/operator/map';

/**
 * This class provides the api service with methods to load common/other data.
 */
@Injectable()
export class ApiCommonV1Service extends ApiBaseService {

    private getQueryURL: string;

    constructor(private _http: Http, configService: ConfigService) {
        super(_http, configService);

        this.buildURLs();
    }

    buildURLs() {
        
    }

}
