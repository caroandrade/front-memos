import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Memo } from 'src/app/interfaces/interface';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  memos!: Memo[];
  

  show = true;
  miFormulario: FormGroup = this.fb.group({
    palabra       : [ , [Validators.required, Validators.pattern('[a-zA-ZáíéóúÁEÍÓÚa-zA-Z]*')],],
    numero      : [ , [Validators.required, Validators.min(0)]],
   


  })
  constructor( private fb: FormBuilder, private busquedaService: ServicesService) { }

 ngOnInit() {
   
     
        
      this.miFormulario.reset({
        palabra      : "palabra",
        numero    : 0
       
      })

      

 }
campoEsValido(campo: string){
  return this.miFormulario.controls[campo].errors
     && this.miFormulario.controls[campo].touched;

}


 

guardar(){
    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();//evalua si todos los campos del formulario fueron tocado
    
      
      return; 
    }else {
      const dato = this.miFormulario.get('palabra')?.value;
    
    if(dato !="" || null){
     this.buscarPal(dato);

    }
    const  datoNumero= this.miFormulario.get('numero')?.value;
    if(datoNumero !="" || null){
      this.buscarNum(datoNumero);

    }

    
    }this.miFormulario.reset();//vuelve al formulario en blanco

    
    
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
 
}
