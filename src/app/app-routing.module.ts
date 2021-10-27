import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyPicComponent } from './body-pic/body-pic.component';
import { BodyComponent } from './body/body.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DesignComponent } from './design/design.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { LoginComponent } from './login/login.component';

import { ChennaiComponent } from './othersites/chennai/chennai.component';
import { KeralaComponent } from './othersites/kerala/kerala.component';
import { MaduraiComponent } from './othersites/madurai/madurai.component';
import { GalleryComponent } from './properties/gallery/gallery.component';
import { SinglepropertyComponent } from './properties/singleproperty/singleproperty.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'loginPage',
    component:LoginComponent

  },{
    path:'registerPage',
    component:RegisterComponent
  },

  {
    path:"dreamhouse",
    component:BodyComponent
  },
  {
    path:"othersites",
    children:[
      {
        path:'chennai',
        component:ChennaiComponent

      },
      {
        path:'mumbai',
        component:MaduraiComponent
      }
      ,
      {
        path:'kerala',
        component:KeralaComponent
      }
    ]
  },
  {
path:'properties',
children:[
  {
    path:'singlepropert',
    component:SinglepropertyComponent
  },{
    path:'gallery',
    component:GalleryComponent
  }
]

  },
  {
    path:'design',
    component:DesignComponent
  },
  {
    path:'contacts',
    component:ContactsComponent

  },
  {
    path:"",
    component:BodyPicComponent
  },{
    path:'**',
    component:ErrorpageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
