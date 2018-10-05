import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  gitDetails: any;
  internDetails: any;
  constructor(private notificationsService: NotificationsService) { }

  ngOnInit() {

    this.notificationsService.getStudentGitDetails('lavina98').subscribe(
      (data: any) => {
        console.log(data);
        this.gitDetails = data;
        console.log(this.gitDetails);
      }
    );

    this.notificationsService.getInternshipDetails().subscribe(
      (data: any) => {
        console.log(data);
        this.internDetails = data.result;
        for (let i = 0 ; i < data.result.length ; i++) {
            console.log('in loop');
            console.log(i);
        }

      }
    );

  }

}
