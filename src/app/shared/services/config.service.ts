import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class ConfigService {

    private queryURL;
    private login;
    private ipForIFrame: string;

    constructor() {
        // this.queryURL = window.location.protocol + '//' + window.location.hostname + '/support';
        this.queryURL = 'http://10.2.53.194:1337';
        this.ipForIFrame = window.location.protocol + '//' + window.location.hostname;
        this.login = false;
    }

    getQueryURL() {
        return this.queryURL;
    }

    getIpForIFrame() {
        return this.ipForIFrame;
    }
}

/* angular-cli.json
"environments": {
        "source": "environments/environment.ts",
        "dev": "environments/environment.ts",
        "prod": "environments/environment.prod.ts"
      }
*/
