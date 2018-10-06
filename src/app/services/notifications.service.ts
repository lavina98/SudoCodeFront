import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class NotificationsService {

    constructor(private http: HttpClient) {

    }
    getStudentGitDetails(data: any): Observable<any> {
        const val = 'http://localhost:3500/scraping/github/' + data;
        return this.http.get(val).pipe(map(
            (res: any) => {
                console.log(res);
                return res;
            }
        ));

    }
    getInternshipDetails(): Observable<any> {
        return this.http.get('http://localhost:3500/scraping/linkedin').pipe(map(
            (data) => {
                console.log(data);
                return data;
            }
        ))
    }
}
