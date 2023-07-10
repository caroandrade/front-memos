import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemosComponent } from './component/memos/memos.component';
import { ListadoComponent } from './component/listado/listado.component';

const routes: Routes = [

  {path:'resultado', component: ListadoComponent},
  {path:'listado', component: MemosComponent},
  {path:'', redirectTo:'/home/listado', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
