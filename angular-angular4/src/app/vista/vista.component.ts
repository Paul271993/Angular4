import { Component, OnInit } from '@angular/core';
import { CiudadesServiceService } from '../shared/ciudades-service.service';


@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
  

  constructor(public ciudadService: CiudadesServiceService) { }

  ngOnInit(): void {
  }

}


