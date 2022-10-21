import { Filme } from './../_models/filme.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FilmeService {
  private filme!: Filme;
  constructor() {}

  setFilme(filme: Filme) {
    this.filme = filme;
  }

  getFilme() {
    return this.filme;
  }
}
