import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class ConfigService {

    private queryURL;
    private login;

    constructor() {
        this.queryURL = window.location.protocol + '//'+ window.location.host;
        this.login = false;
    }

    getQueryURL() {
        return this.queryURL;
    }
}
