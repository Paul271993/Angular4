
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
  public cambio: boolean;
  // public ciudadEncontrada: String;



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
    //  this.resultado= "Nombre:"+ this.ciudades[this.ciudades.length-1].nombre + "Pais: "+ this.ciudades[this.ciudades.length-1].pais+ "Codigo:"+ this.ciudades[this.ciudades.length-1].codigo;
    //  this.ciudades.values

     
  }
  getOne(code:string):Ciudad{
    let i=0
    let ciudadEncontrada:Ciudad;
    while(i<this.ciudades.length){
   if(code==this.ciudades[i].codigo){
    ciudadEncontrada=this.ciudades[i];
    i=this.ciudades.length;
    console.log(ciudadEncontrada);
   }i++
    }
    return  ciudadEncontrada;
   
  }

 
 edit( code:string,ciudad:Ciudad){
  this.cambio = true;
  for(let i = 0;i<this.ciudades.length;i++){
    if(code==this.ciudades[i].codigo){
         this.ciudades[i]=ciudad;
      console.log(ciudad);          
  }
 } 
}

delete(code:string){
// let guardar:Ciudad
  for(let i = 0;i<this.ciudades.length;i++){
    // console.log("1")
    // console.log(code);
    if(code===this.ciudades[i].codigo){     
      console.log("2") 
      // let guardar= this.ciudades[i];
      this.ciudades.splice(i,1) 
  }
 } 
}



  
 
}
