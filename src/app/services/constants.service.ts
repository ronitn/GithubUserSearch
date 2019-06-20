import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  readonly SORT_BY_RANK = 'Sort By Rank';
  readonly RANK = 'rank';
  readonly ASC = 'asc';
  readonly DESC = 'desc';
  readonly ARROW_DOWN_FONT = 'fas fa-arrow-down';
  readonly ARROW_DOWN_UP = 'fas fa-arrow-up';
  readonly GITHUB_API_BASE = 'https://api.github.com';
  readonly SEARCH_USERS_GITHUB = '/search/users';
  readonly GITHUB_SEARCH_KEY = 'q';

  constructor() { }
}
