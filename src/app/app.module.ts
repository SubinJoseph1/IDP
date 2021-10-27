import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { BodyPicComponent } from './body-pic/body-pic.component';
import { DesignComponent } from './design/design.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactsComponent } from './contacts/contacts.component';
import { OthersitesComponent } from './othersites/othersites.component';
import { ChennaiComponent } from './othersites/chennai/chennai.component';
import { MaduraiComponent } from './othersites/madurai/madurai.component';
import { PropertiesComponent } from './properties/properties.component';
import { SinglepropertyComponent } from './properties/singleproperty/singleproperty.component';
import { StandardlistComponent } from './properties/standardlist/standardlist.component';
import { GalleryComponent } from './properties/gallery/gallery.component';
import { MensorylistComponent } from './properties/mensorylist/mensorylist.component';
import { KeralaComponent } from './othersites/kerala/kerala.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { NavComponent } from './nav/nav.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { C3Component } from './c3/c3.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    BodyPicComponent,
    DesignComponent,
    HomepageComponent,
    ContactsComponent,
    OthersitesComponent,
    ChennaiComponent,
    MaduraiComponent,
    PropertiesComponent,
    SinglepropertyComponent,
    StandardlistComponent,
    GalleryComponent,
    MensorylistComponent,
    KeralaComponent,
    ErrorpageComponent,
    NavComponent,
    C1Component,
    C2Component,
    C3Component,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
