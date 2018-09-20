import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloWorldCla } from './component.one/component.one';
import { NewCompComponent } from './new-comp/new-comp.component';
import { TweetComponent } from './tweet/tweet.component';
import { TimelineComponent } from './timeline/timeline.component';
import { BlogComponent } from './blog/blog.component';

import { DataService } from './data.service';
import { PinComponent } from './pin/pin.component';
import { CommonModule } from '../../node_modules/@angular/common';
import { animotoComponent } from './animoto/animoto';

const daFukinRutas: Route[] = [
  {path: '', component: HelloWorldCla },
  {path: 'blog', component: BlogComponent},
  {path: 'twitter', component: TimelineComponent},
  {path: 'fukinpins', component: PinComponent},
  {path: 'fukinAnimoto', component: animotoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldCla,
    NewCompComponent,
    TweetComponent,
    TimelineComponent,
    BlogComponent,
    PinComponent,
    animotoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(daFukinRutas)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
