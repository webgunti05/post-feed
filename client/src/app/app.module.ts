import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { NavService } from './services/nav.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FeedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path : '', redirectTo : 'Home', pathMatch : 'full'},
      { path : 'Home', component : HomeComponent},
      { path : 'Feed', component : FeedComponent}
    ])
  ],
  providers: [
    NavService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
