import { Component, OnInit, Input } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

import { Memo } from 'src/app/interfaces/interface';

@Component({
  selector: 'app-memos',
  templateUrl: './memos.component.html',
  styleUrls: ['./memos.component.css']
})
export class MemosComponent implements OnInit {
  
@Input() memos:Memo[]=[];
  
  // memos: Memo[]= [];
  
  p: number = 1;



constructor ( private MemoService: ServicesService){}

ngOnInit(){

  this.MemoService.getMemos().subscribe( resp => {this.memos = resp;
      
        return this.memos;

});

}


}



 
