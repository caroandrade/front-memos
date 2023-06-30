import { Component, Input } from '@angular/core';
import { Memo } from './interfaces/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Memoramdums';

  @Input() Memos:Memo[]=[]
}
