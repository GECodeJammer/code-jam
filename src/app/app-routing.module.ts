import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'technical-library',
    loadChildren: './technical-library/technical-library.module#TechnicalLibraryModule'
  },
  {
    path: '',
    redirectTo: 'technical-library',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
