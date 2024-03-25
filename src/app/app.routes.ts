import { MainPageComponent } from './pages/main-page/main-page.component';
import { TheSushiRadioCalcultorComponent } from './pages/the-sushi-radio-calcultor/the-sushi-radio-calcultor.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'sushi-cal',
    component: TheSushiRadioCalcultorComponent,
  },
  {
    path: '',
    component: MainPageComponent,
  },
];
