import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class RefMaterialService {

    constructor(private http: HttpClient) {

    }
    addRef(data: any): Observable<any> {
        const val = 'http://localhost:3500/teacher/reference';
        return  this.http.post(val, data, {withCredentials: true}).pipe(map(
            (response: any) => {
                console.log(response);
                return response;
            }));
     }


}
