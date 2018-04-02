import { NgModule } from '@angular/core';
import { AccountListComponent } from './accounts/accounts.component';
import { AccountsService } from './accounts/accounts.service';
import { MainComponent } from './main.component';
import { Ng2BootstrapModule, TooltipModule } from 'ng2-bootstrap';
import { OrderByPipe } from '../shared/pipes/orderby.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [SharedModule],
    declarations: [MainComponent, AccountListComponent],
    exports: [MainComponent, AccountListComponent],
    providers: [AccountsService]
})
export class MainModule {
}
