import { Routes } from '@angular/router';
import { BookingComponent } from './component/booking/booking.component';
import { HomeComponent } from './component/home/home.component';
import { JoinUpComponent } from './component/join-up/join-up.component';
import { AboutComponent } from './component/about/about.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { FormularioComponent } from './component/formulario/formulario.component';

export const routes: Routes = [

    {path: '', component :HomeComponent},
    {path: 'home', component :HomeComponent},
    {path: 'booking', component :BookingComponent},
    {path: 'joinup', component :JoinUpComponent},
    {path: 'about', component :AboutComponent},
    {path: 'login', component :LoginComponent},
    {path: 'signup', component :SignupComponent},
    {path: 'forms', component :FormularioComponent},
    


    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
