import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  Title: string ='サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト';
  Paragraph: string ='サンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキストサンプルテキスト…';
  Date: string='2016.01.01';
  
  constructor() { }

  ngOnInit() {

  }

}
