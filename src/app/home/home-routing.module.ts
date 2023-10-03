import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  { path: '', component: HeadComponent },
  { path: 'info', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
