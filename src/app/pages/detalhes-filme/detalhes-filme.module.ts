import { HeaderModule } from './../../core/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  DetalhesFilmeRoutingModule,
  routedComponents,
} from './detalhes-filme-routing.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [routedComponents],
  imports: [
    CommonModule,
    DetalhesFilmeRoutingModule,
    HeaderModule,
    MatIconModule,
  ],
})
export class DetalhesFilmeModule {}
