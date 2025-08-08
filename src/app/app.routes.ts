import { Routes } from '@angular/router';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Gallery } from './gallery/gallery';
import { ProductsList } from './products-list/products-list';
import { MensStore } from './mens-store/mens-store';
import { Child } from './child/child';
import { JournalList } from './journal-list/journal-list';
import { Auth } from './auth';

export const routes: Routes = [
      {
    path:'',component:Home
  },
   {
    path:"about",component:About,
     children:[
      {
        path:"child",component:Child
      }
    ]
  },
   {
    path:"contact",component:Contact
  },
    {
    path:"journals",component:JournalList
  },
    {
    path:"gallery",component:Gallery,canActivate:[Auth]
  },
    {
    path:"products",component:ProductsList
  },
     {
    path:"Styles",component:MensStore,
   
  },

  {
    path:"products/:id",component:ProductsList
  },
   {
    path:"**",component:PageNotFound
  },

];
