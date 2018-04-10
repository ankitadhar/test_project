import { NgModule } from '@angular/core';
import { AccountListComponent } from './accounts/accounts.component';
import { AssetListComponent } from './assets/assets.component';
import { CaseListComponent } from './cases/cases.component';
import { OverviewComponent } from './overview/overview.component';
import { MainService } from './main.service';
import { MainComponent } from './main.component';
import { Ng2BootstrapModule, TooltipModule } from 'ng2-bootstrap';
import { OrderByPipe } from '../shared/pipes/orderby.pipe';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [SharedModule],
    declarations: [MainComponent, AccountListComponent, AssetListComponent, CaseListComponent, OverviewComponent],
    exports: [MainComponent, AccountListComponent, AssetListComponent, CaseListComponent, OverviewComponent],
    providers: [MainService]
})
export class MainModule {
}
