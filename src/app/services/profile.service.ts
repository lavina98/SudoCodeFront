import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class ProfileService {
    constructor(private http: HttpClient) {

    }
    addLinks(data: any) {
        const val = 'http://localhost:3500/users/links';
        return  this.http.post(val, data, {withCredentials: true}).pipe(map(
            (response: any) => {
                console.log(response);
                return response;
            }));
    }
}
