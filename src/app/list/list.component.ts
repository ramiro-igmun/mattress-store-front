import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  private path: string;
  private items: Object;
  private title: string;

  constructor(private route: ActivatedRoute, private httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      if (url[0]) {
        this.path = url[0].path;
        this.title = this.path.toUpperCase();
      } else {
        this.path = "";
        this.title = "DESTACADOS"
      }
    });
    this.httpService.getAll(this.path).subscribe(items => this.items = items);
  }

  onClickField(item) {
    if (item.type === 'mattress') {
      this.path = `colchones/${item.id}`
    } else {
      this.path = `somieres/${item.id}`
    }
    this.router.navigate([this.path]);
  }

}
