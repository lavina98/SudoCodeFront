import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class NotificationsService {

    constructor(private http: HttpClient) {

    }
    getStudentGitDetails(): Observable<any> {
        const val = 'http://localhost:3500/scraping/github';
        return this.http.get(val, {withCredentials: true}).pipe(map(
            (res: any) => {
                console.log(res);
                return res;
            }
        ));

    }
    getInternshipDetails(): Observable<any> {
        return this.http.get('http://localhost:3500/scraping/linkedin', {withCredentials: true}).pipe(map(
            (data) => {
                console.log(data);
                return data;
            }
        ));
    }

    getHackathonDetails(): Observable<any> {
        return this.http.get('http://localhost:3500/scraping/hackathons' , {withCredentials: true}).pipe(map(
            (data) => {
                console.log(data);
                return data;
            }
        ));
    }
}
