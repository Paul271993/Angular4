
import { Injectable } from '@angular/core';
import { Ciudad } from '../models/ciudad';

@Injectable({
  providedIn: 'root'
})
export class CiudadesServiceService {

  public ciudad: Ciudad;
  public ciudades: Ciudad[];
  public estado:Boolean;
  public resultado:String;



  constructor() { 
    this.ciudad=null
    this.ciudades=[]
  }

  nuevaCiudad1(ciudad:Ciudad){
    this.estado = true
    this.ciudades.push(ciudad)
    console.log(this.ciudades)
    this.resultado= "Nombre:"+ this.ciudades[this.ciudades.length-1].nombre + "Pais: "+ this.ciudades[this.ciudades.length-1].pais+ "Codigo:"+ this.ciudades[this.ciudades.length-1].codigo;
  } 

  getAll()
  {
    // return this.ciudades
     console.log(this.ciudades)
     this.ciudades

    //  this.resultado= this.ciudades[this.ciudades.length].nombre,this.ciudades[this.ciudades.length].pais,this.ciudades[this.ciudades.length].codigo;
  }

  getOne()
  {
   
  }
}
