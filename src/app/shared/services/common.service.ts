import { Injectable, Inject } from '@angular/core';
import { ConfigService } from './index';

@Injectable()
export class CommonService {

    private accountName: string;

    constructor(private _configService: ConfigService) {
        this.accountName = '';
    }

    setAccountName(accountName) {
        const service = this;
        return service.accountName = accountName;
    }

    getAccountName() {
        const service = this;
        return service.accountName;
    }

    getIpForIFrame() {
        return this._configService.getIpForIFrame();
    }

}
