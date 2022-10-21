import { RouterModule } from '@angular/router';
import { BtnComponent } from './btn.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BtnComponent],
  imports: [CommonModule, RouterModule],
  exports: [BtnComponent],
})
export class BtnModule {}
