import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AssociationComponent } from '../app/pages/association/association.component';
import { AuthenticationComponent } from '../app/pages/authentication/authentication.component';
import { LoginComponent } from '../app/pages/login/login.component';
import { ChooseFavoriteNewsComponent } from '../app/pages/choose-favorite-news/choose-favorite-news.component';
import { ChooseFavoriteShowsComponent } from '../app/pages/choose-favorite-shows/choose-favorite-shows.component';
import { ChooseFavoriteSportShowsComponent } from '../app/pages/choose-favorite-sport-shows/choose-favorite-sport-shows.component';
import { FindFriendsComponent } from '../app/pages/find-friends/find-friends.component';
import { NewsComponent } from '../app/pages/news/news.component';
import { ShowsComponent } from '../app/pages/shows/shows.component';
import { SportsComponent } from '../app/pages/sports/sports.component';
import { FeatHomeComponent } from '../app/pages/feat-home/feat-home.component';
import { ContentInfoComponent } from '../app/pages/content-info/content-info.component';
import { EnterFeatComponent } from './pages/enter-feat/enter-feat.component';
import { FeatTypeComponent } from './pages/feat-type/feat-type.component';
import { ChooseShowFeatContentComponent } from './pages/choose-show-feat-content/choose-show-feat-content.component';
import { ChooseSportFeatContentComponent } from './pages/choose-sport-feat-content/choose-sport-feat-content.component';
import { ShareFeatComponent } from './pages/share-feat/share-feat.component';
const routes = [
    { path: '', redirectTo: '/news', pathMatch: 'full' },
    //main pages  
    { path: 'news', component: NewsComponent },
    { path: 'shows', component: ShowsComponent },
    { path: 'sports', component: SportsComponent },
    { path: 'feat-home', component: FeatHomeComponent },
    //feat pages
    { path: 'enter-feat', component: EnterFeatComponent },
    { path: 'choose-feat-type', component: FeatTypeComponent },
    { path: 'choose-show-feat-content', component: ChooseShowFeatContentComponent },
    { path: 'choose-sport-feat-content', component: ChooseSportFeatContentComponent },
    { path: 'share-feat/:id', component: ShareFeatComponent },
    //content
    { path: 'content-info/:id', component: ContentInfoComponent },
    //initial steps
    { path: 'step-01', component: ChooseFavoriteShowsComponent },
    { path: 'step-02', component: ChooseFavoriteSportShowsComponent },
    { path: 'step-03', component: ChooseFavoriteNewsComponent },
    { path: 'initial-find-friends', component: FindFriendsComponent },
    //account
    { path: 'login', component: LoginComponent },
    { path: 'authentication', component: AuthenticationComponent },
    //premium services
    { path: 'association', component: AssociationComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map