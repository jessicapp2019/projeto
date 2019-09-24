import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/services/evento.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-perfil-evento',
  templateUrl: './perfil-evento.component.html',
  styleUrls: ['./perfil-evento.component.css']
})
export class PerfilEventoComponent implements OnInit {
  protected evento:any;
  protected id: string = null;

  constructor(
    protected eventoService:EventoService,
    protected router: Router,
    protected ativedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.ativedRoute.snapshot.paramMap.get("id");
    if (this.id) {
      this.eventoService.get(this.id).subscribe(
        res => {
          this.evento = res;
        },
        erro => this.id = null
      )
    }
  }
}