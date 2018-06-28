import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

export const SharedRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: '/events/list', pathMatch: 'full' },
            { path: 'login', component: LoginComponent }
        ]
    }
];

export const SharedRoutingModule = RouterModule.forChild(SharedRoutes);
