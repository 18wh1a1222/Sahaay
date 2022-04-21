import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NeedsComponent } from './needs/needs.component';
import { EventsComponent } from './events/events.component';
import { ConnectComponent } from './connect/connect.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PostNeedsComponent } from './post-needs/post-needs.component';
import { HostEventsComponent } from './host-events/host-events.component';
import { MyNeedsComponent } from './my-needs/my-needs.component';
import { RegisteredEventsComponent } from './registered-events/registered-events.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'needs', component: NeedsComponent},
  {path: 'events', component: EventsComponent},
  {path: 'needs/connect', component: ConnectComponent},
  {path: 'needs/connect/invoice', component: InvoiceComponent},
  {path: 'postNeeds', component: PostNeedsComponent},
  {path: 'hostEvents', component: HostEventsComponent},
  {path: 'myNeeds', component: MyNeedsComponent},
  {path: 'registeredEvents', component: RegisteredEventsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
