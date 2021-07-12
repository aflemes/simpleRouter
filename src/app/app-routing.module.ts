import { RightComponent } from './right/right.component';
import { LeftComponent } from './left/left.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: LeftComponent, outlet: 'left'},
  {path: '', component: RightComponent, outlet: 'right' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
