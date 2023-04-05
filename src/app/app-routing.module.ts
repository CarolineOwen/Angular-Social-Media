import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'social-media', loadChildren: () => import('./socia-media/socia-media.module').then(m=>m.SociaMediaModule)},
  {path: '**', redirectTo: 'social-media'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
