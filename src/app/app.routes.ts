import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TestComponent } from './components/test/test.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './admin/user/user.component';

export const routes: Routes = [
    // {
    //     path:'',
    //     component:HomeComponent
    // },
    // {
    //     path:'login',
    //     component:LoginComponent
    // },
    // {
    //     path:'test',
    //     component:TestComponent
    // },

    {
        path: '',
        component: MainLayoutComponent,
        children: [
          { path: '', component: HomeComponent }, // Home route under main layout
          // Add more public routes here
        ]
      },
        {
        path:'login',
        component:LoginComponent
    },
      {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
          { path: '', component: DashboardComponent }, // Dashboard route under admin layout
          { path: 'user', component: UserComponent },
          // Add more admin routes here
        ]
      },
      { path: '**', redirectTo: '' } // Redirect for unknown routes
];

 