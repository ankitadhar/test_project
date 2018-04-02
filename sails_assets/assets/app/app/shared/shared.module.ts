import { NgModule, ModuleWithProviders, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiModule } from './api/api.module';

import { ApiService } from './api/index';
import { ConfigService } from './services/index';
import { FormsModule } from '@angular/forms';

import { KeysPipe } from './pipes/keys';
import { MapValuesPipe } from './pipes/map-values.pipe';
import { SearchByKeyPipe } from './pipes/search-by-key.pipe';
import { OrderByPipe } from './pipes/orderby.pipe';
import { ApiV1Service } from './api/v1/api.v1.service';
import { AgauiModule } from '../ui/components/agaui.shell.module';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
    imports: [CommonModule, RouterModule, AgauiModule, ApiModule],
    declarations: [KeysPipe, SearchByKeyPipe, MapValuesPipe, OrderByPipe],
    exports: [
        CommonModule,
        FormsModule,
        RouterModule,
        AgauiModule,
        KeysPipe,
        SearchByKeyPipe,
        MapValuesPipe,
        OrderByPipe
    ]
})

export class SharedModule {
    static forRoot(): ModuleWithProviders { // ** check **
        return {
            ngModule: SharedModule,
            providers: [
                ConfigService,
                ApiV1Service,
                {
                    provide: ApiService,
                    useFactory: apiLoader,
                    deps: [ConfigService, Injector]
                }]
        };
    }
}

export function apiLoader(config: ConfigService, injector: Injector) {
    return injector.get(ApiV1Service);
}
