import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Memo } from 'src/app/interfaces/interface';
import { ServicesService } from 'src/app/services/services.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent  {

  memos!: Memo[];
  

  show = true;

  miFormulario: FormGroup = this.fb.group({ //identifico al formulario 
    'palabra'     :   [ , [Validators.required, Validators.pattern('[a-zA-ZáíéóúÁÉÍÓÚ]*')],], //especificamos los input del formulario
    'numero'      :   [ , [Validators.required, Validators.min(0)]],
   


  })
  constructor( private fb: FormBuilder, private busquedaService: ServicesService) { }


  


 
campoEsValido(campo: string){
  return this.miFormulario.controls[campo].errors
     && this.miFormulario.controls[campo].touched;

}


buscarPal(termino:string){
  
  
  this.busquedaService.buscarPalabra(termino).subscribe( memo=>{
     this.memos=memo
    return this.memos;
    
  });
  }
 
  buscarNum(termino: number){
  
    this.busquedaService.buscarNum(termino).subscribe( memo=>{
       this.memos=memo
      return this.memos;
    });
    }
    limpiar(){
      this.miFormulario.reset();
      
    }

    guardar(){
      
      //  if (this.miFormulario.invalid){
      //  this.miFormulario.markAllAsTouched();//evalua si todos los campos del formulario fueron tocado
      // console.log(this.miFormulario.value)
        
      //    return; 
      //  }
      
      const dato = this.miFormulario.get('palabra')?.value;
      const  datoNumero= this.miFormulario.get('numero')?.value;
      
      if(dato !="" && datoNumero == null ){
       this.buscarPal(dato);
  
      }
     
      if(datoNumero !="" && dato == null ){
        this.buscarNum(datoNumero);
  
      
      

  
      
      }
     
  
      
      
  }
  
   
  }
            

