import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnicalLibraryComponent } from './technical-library.component';
import { EngineDetailComponent } from './engine-detail/engine-detail.component';

const routes: Routes = [
  {
    path: '',
    component: TechnicalLibraryComponent,
  },
  {
    path: ':id',
    component: EngineDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnicalLibraryRoutingModule { }
