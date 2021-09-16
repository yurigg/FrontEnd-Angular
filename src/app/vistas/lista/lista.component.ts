import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { ApiService } from '../../servicios/api/api.service';

import { episodiosDatosI } from '../../modelos/jsonEpisodio.interface';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})

export class ListaComponent implements OnInit {

  pageActual: number=1;
  pageActualPerso: number=1;
  episodios:episodiosDatosI;

   constructor(private api:ApiService, private router:Router, private modalService: NgbModal ) { }


    // Leemos todos los episodios de la Werb Api
  ngOnInit(): void {
    this.api.getAllEpisodios(1).subscribe(data => {
       this.episodios = <episodiosDatosI>data;
    });
  }
}
