import { Routes } from '@angular/router';
import { DoctorsPageComponent } from './pages/doctors-page/doctors-page.component';

export const routes: Routes = [
    {path: 'doctors', component: DoctorsPageComponent},
    {path: '', component: DoctorsPageComponent},
    {path: '**', redirectTo: ''}
];

