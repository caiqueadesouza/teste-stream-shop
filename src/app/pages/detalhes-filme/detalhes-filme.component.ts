import { Filme } from './../../_models/filme.model';
import { Cinema } from './../../_models/cinema.model';
import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/_services/base.service';
import { ActivatedRoute } from '@angular/router';
import { FilmeService } from 'src/app/_services/filme.service';

@Component({
  selector: 'app-detalhes-filme',
  templateUrl: './detalhes-filme.component.html',
  styleUrls: ['./detalhes-filme.component.scss'],
})
export class DetalhesFilmeComponent implements OnInit {
  cinemas: Cinema[] = [];
  filme!: Filme;

  constructor(
    private baseService: BaseService,
    private route: ActivatedRoute,
    private filmeService: FilmeService
  ) {}

  ngOnInit(): void {
    this.carregarSessoes();
    this.carregarFilme();
  }

  carregarSessoes(): void {
    const paramId: string = this.route.snapshot.paramMap.get('id') ?? '';
    this.baseService.readCinemas(+paramId).subscribe((response) => {
      this.cinemas = response;
    });
  }

  carregarFilme(): void {
    if (!this.filme) {
      this.filme = this.filmeService.getFilme();
    }
  }
}
