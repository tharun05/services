import { Routes, RouterModule } from '@angular/router';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'newAccount', component: NewAccountComponent }
    { path: 'accounts', component: AccountComponent }
    { path: '**', redirectTo: '' }
]


export const routing = RouterModule.forRoot(appRoutes);