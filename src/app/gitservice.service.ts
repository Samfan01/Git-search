import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user'
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitserviceService {

  constructor( private http:HttpClient) { }

  token = environment.token;

  getData(username) {
    return this.http.get(`https://api.github.com/users/${username}?access_token=${this.token}`);
  }
  getRepos(username) {
    return this.http.get(`https://api.github.com/users/${username}/repos`);
  }
}