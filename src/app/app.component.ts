import { Component } from '@angular/core';
import { ConstantsService } from './services/constants.service';
import { GithubService } from './services/github.service';
import { SearchResult } from './models/SearchResult';
import { User } from './models/User';
import { UserRepos } from './models/UserRepos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // sort options
  sortOptions = [
    {
      name: this.constants.BEST_MATCH, sort: this.constants.BEST_MATCH, order: this.constants.DESC
    },
    // {
    //   name: this.constants.SORT_BY_RANK, sort: this.constants.RANK, order: this.constants.DESC, class: this.constants.ARROW_DOWN_UP
    // }
  ];
  searchText: string = null;
  searchResult: SearchResult = null;

  constructor(private constants: ConstantsService, private github: GithubService) { }

  searchUsers() {
    if (this.searchText) {
      this.github.searchUsers(this.searchText).subscribe((searchResult: SearchResult) => {
        this.searchResult = searchResult;
        console.log(this.searchResult);
      });
    } else {
      this.searchResult = null;
    }
  }

  getUserRepos(user: User) {
    this.github.searchUserRepos(user.repos_url).subscribe((userRepos: UserRepos[]) => {
      console.log(userRepos);
      user.repos = userRepos;
    });
  }

  // block space
  blockCharacters(event: KeyboardEvent) {
    console.log(typeof(event))
    console.log(event)
    if (event.keyCode === 32) { // key code for space
      return false;
    }
  }
}
