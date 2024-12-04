import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: 'by-capital',
    loadComponent: () => import('./pages/by-capital-page/by-capital-page.component')
  },
  {
    path: 'by-country',
    loadComponent: () => import('./pages/by-country-page/by-country-page.component')
  },
  {
    path: 'by-region',
    loadComponent: () => import('./pages/by-region-page/by-region-page.component')
  },
  {
    path: 'by/:id',
    loadComponent: () => import('./pages/country-page/country-page.component')
  },

  { path: '**', redirectTo: 'by-capital' }
]

export default routes
