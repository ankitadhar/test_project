import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AbstractApiService } from './api.interface';

@Injectable()
export abstract class ApiService implements AbstractApiService {
    abstract onReceiveMessage: EventEmitter<any>;
    abstract getAllAccounts();
}
