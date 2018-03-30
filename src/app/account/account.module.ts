import { NgModule } from '@angular/core';
import { AccountComponent } from './account.component';
import { Ng2BootstrapModule, TooltipModule } from 'ng2-bootstrap';
import { OrderByPipe } from '../shared/pipes/orderby.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [SharedModule],
    declarations: [AccountComponent],
    exports: [AccountComponent],
    providers: []
})
export class AccountModule {
}
