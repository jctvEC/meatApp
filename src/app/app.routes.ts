import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {RestaurantsComponent} from './restaurants/restaurants.component'
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import{MenuComponent} from './restaurant-detail/menu/menu.component'
import{ReviewsComponent} from './restaurant-detail/reviews/reviews.component'

export const ROUTES: Routes = [
  {path: 'about', component:  AboutComponent},
{path: '', component: HomeComponent},
{path: 'restaurants', component: RestaurantsComponent},
{path: 'restaurants/:id', component: RestaurantDetailComponent, //usando o /:id para parametrizar
  children: [//isso aqui que me faz ter a possibilidade de ter o outlet no rest-detail?
    {path: '',redirectTo:'menu', pathMatch: 'full'},//a padrao, restaurants/id se tiver so o /id vai redirectTo do menu
    {path: 'menu', component : MenuComponent},//restaurants/id/menu//subrota
    {path: 'reviews', component : ReviewsComponent},//restaurants/id/reviews//subrota

  ]}

]
