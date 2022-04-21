import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SahaayService {
  readonly APIUrl = "http://127.0.0.1:8000/"

  constructor(private http: HttpClient) { }

  getAadharList(aadharId: any)  {
    return this.http.get(this.APIUrl+"aadhar/?aadharId="+aadharId);
  }

  RegisterUser(user: any) {
    return this.http.post(this.APIUrl+'sahaay/', user);
  }

  LoginUser(user: any)  {
    return this.http.post(this.APIUrl+'login', user).toPromise();
  }

  getNeeds(status: any)  {
    return this.http.get(this.APIUrl+'needs/?status='+status).toPromise();
  }

  getNeed(needId: any)  {
    return this.http.get(this.APIUrl+"needs/?needId="+ needId);
  }

  myNeeds(userId: any)  {
    return this.http.get(this.APIUrl+'needs/?userId='+userId);
  }

  setNeed(need: any)  {
    return this.http.post(this.APIUrl+'needs/', need);
  }

  setEvent(event: any)  {
    return this.http.post(this.APIUrl+'events/', event);
  }

  getEvents()  {
    return this.http.get(this.APIUrl+'events/');
  }

  getRegisteredEvents(userId: any)  {
    return this.http.get(this.APIUrl+'eventDetails/?userId='+userId);
  }

}
