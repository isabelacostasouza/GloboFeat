import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './pages/authentication/authentication.component';
import { LoginComponent } from './pages/login/login.component';
import { RetrievePasswordComponent } from './pages/retrieve-password/retrieve-password.component';
import { ChooseFavoriteShowsComponent } from './pages/choose-favorite-shows/choose-favorite-shows.component';
import { ChooseFavoriteSportShowsComponent } from './pages/choose-favorite-sport-shows/choose-favorite-sport-shows.component';
import { ChooseFavoriteNewsComponent } from './pages/choose-favorite-news/choose-favorite-news.component';
import { FindFriendsComponent } from './pages/find-friends/find-friends.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { AssociationComponent } from './pages/association/association.component';
import { NewsComponent } from './pages/news/news.component';
import { ShowsComponent } from './pages/shows/shows.component';
import { SportsComponent } from './pages/sports/sports.component';
import { ContentInfoComponent } from './pages/content-info/content-info.component';
import { FeatHomeComponent } from './pages/feat-home/feat-home.component';
import { EnterFeatComponent } from './pages/enter-feat/enter-feat.component';
import { FeatTypeComponent } from './pages/feat-type/feat-type.component';
import { ChooseShowFeatContentComponent } from './pages/choose-show-feat-content/choose-show-feat-content.component';
import { ChooseSportFeatContentComponent } from './pages/choose-sport-feat-content/choose-sport-feat-content.component';
import { ShareFeatComponent } from './pages/share-feat/share-feat.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            AuthenticationComponent,
            LoginComponent,
            RetrievePasswordComponent,
            ChooseFavoriteShowsComponent,
            ChooseFavoriteSportShowsComponent,
            ChooseFavoriteNewsComponent,
            FindFriendsComponent,
            CreateAccountComponent,
            AssociationComponent,
            NewsComponent,
            ShowsComponent,
            SportsComponent,
            ContentInfoComponent,
            FeatHomeComponent,
            EnterFeatComponent,
            FeatTypeComponent,
            ChooseShowFeatContentComponent,
            ChooseSportFeatContentComponent,
            ShareFeatComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map