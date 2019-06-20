import { Component } from '@angular/core';
import { ConstantsService } from './services/constants.service';
import { GithubService } from './services/github.service';
import { SearchResult } from './models/SearchResult';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // sort options
  sortOptions = [
    {
      name: this.constants.SORT_BY_RANK, sort: this.constants.RANK, order: this.constants.ASC, class: this.constants.ARROW_DOWN_FONT
    },
    {
      name: this.constants.SORT_BY_RANK, sort: this.constants.RANK, order: this.constants.DESC, class: this.constants.ARROW_DOWN_UP
    }
  ];
  searchText: string = null;

  constructor(private constants: ConstantsService, private github: GithubService) { }

  searchUsers() {
    if (this.searchText) {
      this.github.searchUsers(this.searchText).subscribe((searchResult: SearchResult) => {
        console.log(searchResult);
      });
    }
  }
}
