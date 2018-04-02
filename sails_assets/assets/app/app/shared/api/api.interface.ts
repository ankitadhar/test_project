import { Observable } from 'rxjs/Observable';
import { EventEmitter } from '@angular/core';

export interface AbstractApiService {
    onReceiveMessage: EventEmitter<any>;
}
