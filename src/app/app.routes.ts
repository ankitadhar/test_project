import { Routes } from '@angular/router';

import { accountRoutes } from './accounts/index';

const routes: Routes = [
    ...accountRoutes,
    { path: '**', redirectTo: 'accounts' }
];

export { routes as ROUTES };

