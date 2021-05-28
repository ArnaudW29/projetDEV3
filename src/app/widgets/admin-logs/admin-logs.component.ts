//service imports
import { AdminService } from './../../admin.service';
import { UserService } from 'src/app/user.service';

// default imports
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-admin-logs',
  templateUrl: './admin-logs.component.html',
  styleUrls: ['./admin-logs.component.scss']
})
export class AdminLogsComponent implements OnInit {

  adminMessageArray:any = [];
  /**
   * 
   * souscrit a la methode getAdminMessages() de admin.service pour que sa propre variable adminMessageArray
   * soit toujours à synchronisée par rapport à la base de donnee
   * 
   * @param _adminService - admin.service
   * @param userService - user.service ; declare ici afin de pouvoir etre utilise au sein de la methode
   *      transformUserIdIntoUsername()
   */
  constructor(private _adminService: AdminService, private userService: UserService) {
    this._adminService.getAdminMessages()
    .subscribe(data => this.adminMessageArray = data);
  }

  ngOnInit(): void { }

}
