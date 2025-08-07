import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Gallery } from './gallery/gallery';
import { ProductsList } from './products-list/products-list';

export const routes: Routes = [
      {
    path:'',component:Home
  },
   {
    path:"about",component:About
  },
   {
    path:"contact",component:Contact
  },
    {
    path:"gallery",component:Gallery
  },
    {
    path:"products",component:ProductsList
  },
      {
    path:"products/:id",component:ProductsList
  },
   {
    path:"**",component:PageNotFound
  },

];
