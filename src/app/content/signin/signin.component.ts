import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'course-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  public className: string;

  constructor(
    private _activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this._activatedRoute.data.subscribe((data: { 'class': string }) => {
      this.className = data['class'];
    });
  }

}
