import { Routes } from '@angular/router';

import { mainRoutes } from './main/main.routes';
import { AccountComponent } from './account/account.component';

const routes: Routes = [
    ...mainRoutes,
    {
        path: 'account/:id',
        component: AccountComponent
    },
    { path: '**', redirectTo: 'dashboard' }
];

export { routes as ROUTES };

