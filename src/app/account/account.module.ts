import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { Ng2BootstrapModule, TooltipModule } from 'ng2-bootstrap';
import { OrderByPipe } from '../shared/pipes/orderby.pipe';
import { SharedModule } from '../shared/shared.module';

import { AccountAssetComponent } from './assets/account-assets.component';
import { AccountCaseComponent } from './cases/account-cases.component';
import { AccountContactComponent } from './contacts/account-contacts.component';
import { AccountService } from './account.service';

@NgModule({
    imports: [SharedModule],
    declarations: [AccountComponent, AccountAssetComponent, AccountCaseComponent, AccountContactComponent],
    exports: [AccountComponent],
    providers: [AccountService]
})
export class AccountModule {
}
