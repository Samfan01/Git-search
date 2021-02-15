import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repo } from '../repo'
import { GitserviceService } from '../gitservice.service';


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})


export class RepositoryComponent implements  OnInit {

 username: any


  repos: any = [];

  constructor(private gitService: GitserviceService,) { };

  ngOnInit(): void {


  }
  fetchRepos(): any {
   
    this.gitService.getRepos(this.username).subscribe(
      data => {
      this.repos = data;
      

    }
    );

  }


  test() {
    alert()

  }
}
