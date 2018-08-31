import {Component, OnInit} from '@angular/core';
import {SingletonService} from '../common/services/singleton.service';

@Component({
  selector: 'course-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [SingletonService]
})
export class FooterComponent implements OnInit {

  public constructor(
    private _singletonService: SingletonService
  ) {
    console.log(`in constructor ${_singletonService.timestamp}`);
  }

  ngOnInit() {
  }

}
