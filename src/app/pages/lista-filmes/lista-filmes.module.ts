import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  ListaFilmesRoutingModule,
  routedComponents,
} from './lista-filmes-routing.module';
import { HeaderModule } from 'src/app/core/header/header.module';
import { BtnModule } from 'src/app/share/components/btn/btn.module';

@NgModule({
  declarations: [routedComponents],
  imports: [CommonModule, ListaFilmesRoutingModule, HeaderModule, BtnModule],
})
export class ListaFilmesModule {}
