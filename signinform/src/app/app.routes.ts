import { Routes } from '@angular/router';
import { Signinform } from './signinform/signinform';
import { Confirmation } from './confirmation/confirmation';

export const routes: Routes = [
  {
    path: '',
    component: Signinform
  },
  {
   
  path: 'confirmation/:id',
  component: Confirmation

  }
];