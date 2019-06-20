import { UserRepos } from './UserRepos';

export class User {
    html_url: string;
    login: string;
    repos_url: string;
    score: string;
    avatar_url: string;
    repos: UserRepos[];
}
