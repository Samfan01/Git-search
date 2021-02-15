import { Component, OnInit } from '@angular/core';
import { User } from '../user';
//import {HttpClient} from '@angular/common/http';
import { GitserviceService } from '../gitservice.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  user = new User('Samfan01','', 0)
  username = User.name

  repos: any = [];

  constructor(private gitService: GitserviceService) {
 

  }
  profile: any;

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers():any {
    interface ApiResponse {
      login: string;
      avatar_url: string;
      followers: number;
      following: number;
      public_repos: number;
      //name:string;
      location: string;
    }
    this.gitService.getData(this.user.name).subscribe(data => {
      this.profile = data;
    })

  };
  

  fetchRepos(): any {
   
    this.gitService.getRepos(this.user.name).subscribe(
      data => {
        this.repos=data;
        this.repos.created_at=Date
      

    }
    );

  }
}
