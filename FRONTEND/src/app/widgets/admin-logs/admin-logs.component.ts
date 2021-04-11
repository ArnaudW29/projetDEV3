//service imports
import { AdminService } from './../../admin.service';

// default imports
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-admin-logs',
  templateUrl: './admin-logs.component.html',
  styleUrls: ['./admin-logs.component.scss']
})
export class AdminLogsComponent implements OnInit {

  adminMessageArray:any = [];

  constructor(private _adminService: AdminService) {
    this._adminService.getAdminMessages()
    .subscribe(data => this.adminMessageArray = data);
  }

  ngOnInit(): void {
  }

}
