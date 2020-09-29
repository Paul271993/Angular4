import { Component, OnInit } from '@angular/core';
import { CiudadesServiceService } from '../shared/ciudades-service.service';
import { Ciudad } from '../models/ciudad';
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  ciudad: any;

 
  constructor(public ciudadService: CiudadesServiceService) {
   
   }
  

 nuevaCiudad(nombre:HTMLInputElement, pais:HTMLInputElement, codigo:HTMLInputElement)
 {
   let ciudad = new Ciudad(nombre.value, pais.value, codigo.value);
   console.log(ciudad)
  this.ciudadService.nuevaCiudad1(ciudad);
 }

 getAll()
 {
  //  console.log(this.ciudadService.ciudad)
   this.ciudadService.getAll()
 }

 getOne()
 {
   this.ciudadService.getOne()
 }

  ngOnInit(): void {
  }

}
