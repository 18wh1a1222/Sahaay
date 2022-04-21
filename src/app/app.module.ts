import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SahaayService} from './sahaay.service';

import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NeedsComponent } from './needs/needs.component';
import { ConnectComponent } from './connect/connect.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PostNeedsComponent } from './post-needs/post-needs.component';
import { HostEventsComponent } from './host-events/host-events.component';
import { MyNeedsComponent } from './my-needs/my-needs.component';
import { EventsComponent } from './events/events.component';
import { RegisteredEventsComponent } from './registered-events/registered-events.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NeedsComponent,
    ConnectComponent,
    InvoiceComponent,
    PostNeedsComponent,
    HostEventsComponent,
    MyNeedsComponent,
    EventsComponent,
    RegisteredEventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SahaayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
