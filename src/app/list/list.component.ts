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

  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.route.url.subscribe(url => this.url = url[0].path);
    this.httpService.myMethod(this.url).subscribe(items => this.items = items);
  }

}
