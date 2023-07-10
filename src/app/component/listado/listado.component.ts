import { Component, Input } from '@angular/core';

import { Memo } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {
   

   @Input() memosHijo:Memo[]=[];
   p: number = 1;


   constructor ( ){}
   
  

}

