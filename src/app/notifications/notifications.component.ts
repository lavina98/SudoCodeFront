import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  gitDetails: any;
  hackathonDetails: any;
  internDetails: any;
  constructor(private notificationsService: NotificationsService) { }

  ngOnInit() {

    this.notificationsService.getStudentGitDetails().subscribe(
      (data: any) => {
        console.log(data);
        this.gitDetails = data;
        console.log(this.gitDetails);
      }
    );

    this.notificationsService.getInternshipDetails().subscribe(
      (data: any) => {
        console.log(data);
        this.internDetails = data;
        console.log('in notif comp');
        console.log(this.internDetails);
      }
    );

    this.notificationsService.getHackathonDetails().subscribe(
      (data: any) => {
        console.log(data);
        this.hackathonDetails = data;
        console.log(this.hackathonDetails);
      }
    );

  }

}
