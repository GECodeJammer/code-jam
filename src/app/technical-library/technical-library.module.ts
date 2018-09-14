import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { TechnicalLibraryRoutingModule } from './technical-library-routing.module';
import { TechnicalLibraryComponent } from './technical-library.component';
import {
  MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatChipsModule, MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { EngineDetailComponent } from './engine-detail/engine-detail.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TechnicalLibraryRoutingModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    LayoutModule
  ],
  declarations: [TechnicalLibraryComponent, EngineDetailComponent]
})
export class TechnicalLibraryModule { }
