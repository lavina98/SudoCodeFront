import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable()
export class AttendanceService {

    url: any = 'http://localhost:3500/';
    constructor(private http: HttpClient) {
    }

    updateAttendance(data: any): Observable<any> {
        const val = this.url + 'teacher/lecture';
        return  this.http.post(val, data, {withCredentials: true}).pipe(map(
            (response: any) => {
                console.log(response);
                return response;
            }));
     }
     getAttendance(): Observable<any> {
        const val = this.url + 'teacher/attendance';
        return this.http.get(val, {withCredentials: true}).pipe(map(
            (response) => {
                console.log(response);
                return response;
            }
        ));
     }

}
