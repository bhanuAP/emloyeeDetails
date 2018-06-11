import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  employees = [];
  constructor(private userServiceService: UserServiceService) { }

  deleteItem(id) {
    this.userServiceService.deleteItem(id)
    .subscribe((data: any[]) => {
        this.employees = data
    });
  }

  ngOnInit() {
    this.userServiceService.getUsers()
    .subscribe((data: any[]) => this.employees = data);
  }

}
