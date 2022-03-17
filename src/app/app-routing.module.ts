import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { NotfoundComponent } from './public/components/notfound/notfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'public/login', pathMatch: 'full' },
  {
    path: 'public',
    component: PublicComponent,
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'private',
    component: PrivateComponent,
    loadChildren: () =>
      import('./private/private.module').then((m) => m.PrivateModule),
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
