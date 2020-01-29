import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  Title: string ='サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト';
  Paragraph: string ='サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト…';
  Date: string='2016.01.01';
  
  constructor() { }

  ngOnInit() {

  }

}
