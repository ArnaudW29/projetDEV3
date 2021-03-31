import { DataService } from './data.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from "@angular/core";
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {
  description: any;
  active_description: string = '';
  constructor(private dataService: DataService) {}

  get_game_description(game_number: string) {
    this.dataService.get_description(game_number)
      .subscribe(response => {
        this.description = response;
      });
  }
}
