import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ArticleComponent } from './article.component';
import { ListComponent } from './list/list.component';
import { ArticleRoutingModule } from './article-routing.module';

@NgModule({
  declarations: [
    ArticleComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    ArticleRoutingModule
  ],
  exports:[
    ArticleComponent,
    ListComponent
  ],
  providers: [],
  bootstrap: [ArticleComponent]

})
export class ArticleModule { }
