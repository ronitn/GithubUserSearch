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
  readonly USERS_GITHUB = '/users';
  readonly GITHUB_SEARCH_KEY = 'q';
  readonly GITHUB_CLIENT_ID = 'd6126f881eeedfdf1b5f';
  readonly GITHUB_CLIENT_SECRET = 'ca381cff61a3ce44085e9b6a7be7a46ce7abd458';
  readonly CLIENT_ID = 'client_id';
  readonly CLIENT_SECRET = 'client_secret';

  constructor() { }
}
