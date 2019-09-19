import { Component, OnInit } from '@angular/core';
import { Evento } from '../../model/evento';
import { EventoService } from '../../services/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.css']
})
export class AddEventoComponent implements OnInit {

  protected evento:Evento = new Evento;
  

  constructor(
    protected eventoService:EventoService,
    private router:Router
  ) { }

  ngOnInit() {
  }
  onsubmit(form) {
    console.log(this.evento);
    this.eventoService.save(this.evento)
    .subscribe(
      res => {
        console.log("Cadastrado!",res);
        alert("Cadastrado!");
        this.router.navigate(['']);
      },
      erro => {
        console.log("Não cadastrado!",erro)
        alert("Não cadastrado!");
      }
    )

  }

  

}