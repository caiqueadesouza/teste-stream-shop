import { HeaderModule } from './../../core/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  CadastroRoutingModule,
  routedComponents,
} from './cadastro-routing.module';
import { BtnModule } from 'src/app/share/components/btn/btn.module';

@NgModule({
  declarations: [routedComponents],
  imports: [CommonModule, CadastroRoutingModule, HeaderModule, BtnModule],
})
export class CadastroModule {}
