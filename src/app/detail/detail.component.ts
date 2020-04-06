import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../service/http.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  private path: string;
  private id: string;
  private item: object;

  constructor(private route: ActivatedRoute, private httpService: HttpService, private location: Location) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.path = url[0].path;
    });
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.httpService.getOne(`${this.path}/${this.id}`).subscribe(item => this.item = item);
  }

  handleDelete() {
    this.httpService.deleteOne(`${this.path}/${this.id}`).subscribe(item => console.log(item));
    this.location.back();
  }

}
