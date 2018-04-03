import { Routes } from '@angular/router';

import { mainRoutes } from './main/main.routes';
import { AccountComponent } from './account/account.component';
import {BireportsComponent} from './bireports/bireports.component'

const routes: Routes = [
    ...mainRoutes,
    {
        path: 'account/:id',
        component: AccountComponent
    },
    { 
        path:'bireports',
        component:BireportsComponent
    },
    { path: '**', redirectTo: 'dashboard' }

];

export { routes as ROUTES };

