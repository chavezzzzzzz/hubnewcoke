import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiddleComponent } from './middle/middle.component';

const routes: Routes = [
  {path: 'Middle', component: MiddleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
