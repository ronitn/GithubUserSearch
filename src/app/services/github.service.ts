import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ConstantsService } from './constants.service';
import { Observable } from 'rxjs';
import { SearchResult } from '../models/SearchResult';
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient, private constants: ConstantsService) { }

  searchUsers(username: string): Observable<SearchResult> {
    let httpParams = new HttpParams();
    httpParams = httpParams.set(this.constants.GITHUB_SEARCH_KEY, username);
    const options = {
      params: httpParams
    };
    return this.http.get<SearchResult>(this.constants.GITHUB_API_BASE + this.constants.SEARCH_USERS_GITHUB, options);
  }
}
