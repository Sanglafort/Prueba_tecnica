import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

export const routes: Routes = [

  { path: 'home', title: 'Home', component: HomePageComponent },
  { path: 'about', title: 'About', component: AboutPageComponent },
  { path: 'contact', title: 'Contact', component: ContactPageComponent },
  { path: 'countries', title: 'Countries', loadChildren: () => import('./countries/countries.routes') },

  { path:'**', redirectTo: 'countries'}

];
