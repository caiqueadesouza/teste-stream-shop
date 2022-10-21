import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesFilmeComponent } from './detalhes-filme.component';

const routes: Routes = [{ path: 'filme/:id', component: DetalhesFilmeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesFilmeRoutingModule {}

export const routedComponents = [DetalhesFilmeComponent];
