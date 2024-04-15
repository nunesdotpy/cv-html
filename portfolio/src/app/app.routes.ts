import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ContatoComponent } from './contato/contato.component';

export const routes: Routes = [
  {
    path: 'contato',
    component: ContatoComponent,
  },
];

const routing: ModuleWithProviders = RouterModule.forRoot(routes);
