import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './shared/auth/auth-guard.service';

const AppRoutes: Routes = [
  { path: 'app', component: LayoutComponent }
];

export const AppRoutingModule = RouterModule.forRoot(AppRoutes, { useHash: true });
