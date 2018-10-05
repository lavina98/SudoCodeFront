import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class EventsService {
    url: any = 'http://localhost:3500/';
    constructor(private http: HttpClient) {

    }

    createEvent(data: any): Observable<any> {
        const val = this.url + 'teacher/event';
        return  this.http.post(val, data).pipe(map(
            (response: any) => {
                console.log(response);
                return response;
            }));
     }

}
