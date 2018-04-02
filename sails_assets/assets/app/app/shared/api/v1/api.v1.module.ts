import { NgModule } from '@angular/core';
import { ApiV1Service } from './api.v1.service';
import { ApiCommonV1Service } from './api.common.service';
import { ApiAccountsService } from './api.accounts.service';

@NgModule({
    providers: [ApiV1Service, ApiCommonV1Service, ApiAccountsService]
})

export class ApiV1Module {
}
