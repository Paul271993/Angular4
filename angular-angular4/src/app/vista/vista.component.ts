import { Component, OnInit } from '@angular/core';
import { CiudadesServiceService } from '../shared/ciudades-service.service';
import { Ciudad } from '../models/ciudad';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
  ciudadEncontrada: Ciudad;
  

  constructor(public ciudadService: CiudadesServiceService) { }
  
   getAll()
 {
  //  console.log(this.ciudadService.ciudad)
   this.ciudadService.getAll()
 }

 buscarCiudad(codigo:HTMLInputElement){
    
  this.ciudadEncontrada = this.ciudadService.getOne(codigo.value);
 }

 actualizarCiudad(codigoBuscar:HTMLInputElement,nombre:HTMLInputElement,pais:HTMLInputElement,codigo:HTMLInputElement){

  let ciudadModificada:Ciudad=new Ciudad(nombre.value,pais.value,codigo.value);
  this.ciudadService.edit(codigoBuscar.value,ciudadModificada);
}


eliminarCiudad(codigo:HTMLInputElement){

 this.ciudadService.delete(codigo.value);
 console.log(this.ciudadService.ciudades)
 console.log(codigo.value)
 this.ciudadService.delete(codigo.value);
}

 
  ngOnInit(): void {
  }

  

}


