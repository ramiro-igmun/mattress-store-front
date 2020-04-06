import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from '../service/http.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../dtos/item';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.less']
})
export class DetailComponent implements OnInit {

  private path: string;
  private id: string;
  private item: Item;
  private detailForm: FormGroup;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private httpService: HttpService,
    private location: Location,
    private router: Router) {
    this.buildForm();
  }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.path = url[0].path;
    });
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.httpService.getById(`${this.path}/${this.id}`).subscribe(item => this.item = item);
  }

  buildForm() {
    this.detailForm = this.fb.group({
      name: ['', null],
      description: ['', null],
      price: ['', null],
    });
  }

  handleDelete() {
    this.httpService.deleteById(`${this.path}/${this.id}`).subscribe(item => console.log(item));
    this.location.back();
  }

  onSubmit() {
    let modifiedItem: Item = { ...this.item };
    const name = this.detailForm.get('name').value;
    const description = this.detailForm.get('description').value;
    const price = this.detailForm.get('price').value;
    if (name) {
      modifiedItem.name = name;
    }
    if (description) {
      modifiedItem.description = description;
    }
    if (price) {
      modifiedItem.price = price;
    }
    if (name || description || price) {
      this.httpService.modifyById(`${this.path}/${this.id}`, modifiedItem).subscribe(item => console.log(item));
      this.ngOnInit();
    }
  }

}
