import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: 'app',
    component: LayoutComponent
  }
];

export const LayoutRoutingModule = RouterModule.forChild(routes);
