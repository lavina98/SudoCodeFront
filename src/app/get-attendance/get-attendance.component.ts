import { Component, OnInit } from '@angular/core';
import { AttendanceService } from '../services/attendance.service';
@Component({
  selector: 'app-get-attendance',
  templateUrl: './get-attendance.component.html',
  styleUrls: ['./get-attendance.component.css']
})
export class GetAttendanceComponent implements OnInit {

  attendanceArr: any;
  constructor(private attendanceService: AttendanceService) { }

  ngOnInit() {
    this.attendanceArr = this.attendanceService.getAttendance().subscribe(
      (data) => {
        this.attendanceArr = data;
        console.log(this.attendanceArr);
      }
    );

  }

}
