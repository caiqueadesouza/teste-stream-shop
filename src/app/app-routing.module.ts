import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/lista-filmes/lista-filmes.module').then(
        (m) => m.ListaFilmesModule
      ),
  },

  {
    path: 'detalhes',
    loadChildren: () =>
      import('./pages/detalhes-filme/detalhes-filme.module').then(
        (m) => m.DetalhesFilmeModule
      ),
  },

  {
    path: 'cadastro',
    loadChildren: () =>
      import('./pages/cadastro/cadastro.module').then((m) => m.CadastroModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
