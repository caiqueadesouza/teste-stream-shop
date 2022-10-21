import { ListaFilmesComponent } from './lista-filmes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: ListaFilmesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaFilmesRoutingModule {}

export const routedComponents = [ListaFilmesComponent];
