import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../model/user';
import { UserService } from '../service/user-service.service';
import { UserProfileService } from '../service/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private userService: UserService,
    private userProfileService: UserProfileService) {

     }

  ngOnInit():void {
    this.getUser(this.route.snapshot.params.id);
  }

  public getUser(id: number): void {
    this.userProfileService.findUserById(id)
    .subscribe(data => this.user = data);
  }

}
