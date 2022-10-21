import { Router } from '@angular/router';
import { Filme } from './../../_models/filme.model';
import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/_services/base.service';
import { FilmeService } from 'src/app/_services/filme.service';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.scss'],
})
export class ListaFilmesComponent implements OnInit {
  filmes: Filme[] = [];

  url = this.router.url;
  constructor(
    private baseService: BaseService,
    private router: Router,
    private filmeService: FilmeService
  ) {}

  ngOnInit(): void {
    this.carregarFilmes();
  }

  carregarFilmes(): void {
    this.baseService.readFilmes().subscribe((response) => {
      this.filmes = response;
    });
  }

  goToDetalhesByService(filme: Filme) {
    this.filmeService.setFilme(filme);
    this.router.navigateByUrl(`${this.url}/detalhes/filme/${filme.id}`);
  }
}
