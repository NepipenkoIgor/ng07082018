import {Component, HostListener, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'course-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.css']
})
export class OneProductComponent implements OnInit {

  public constructor(
    private _activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this._activatedRoute.data.subscribe(data => {
      console.log(data);
    });
    this._activatedRoute.queryParams.subscribe((params) => {
      console.log(params);
    });
  }

}
