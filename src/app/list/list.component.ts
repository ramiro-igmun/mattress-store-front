import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  private url: string;
  private items: Object;
  private title: string;

  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      if (url[0]) {
        this.url = url[0].path;
        this.title = this.url.toUpperCase();
      } else {
        this.url = "";
        this.title = "DESTACADOS"
      }
    });
    this.httpService.myMethod(this.url).subscribe(items => this.items = items);
    console.log(this.url);
  }

}
