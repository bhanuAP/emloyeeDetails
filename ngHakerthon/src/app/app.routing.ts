import  { UserListComponent } from './user-list/user-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: UserListComponent}
];

export const routing = RouterModule.forRoot(routes);
