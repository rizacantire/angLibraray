import { Component, OnInit } from '@angular/core';
import { Pages } from 'src/app/models/pages';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pages: Pages[] = [{name:"Kitaplığım",url:"kitaplik"},
  {name:'Okuduklarım',url:"okunan"},
  {name:'Satın Alım Listesi',url:"satin-alma-listesi"},
  {name:'Okumadıklarım',url:"okumadiklarim"}];
}
