import {Injectable} from '@angular/core';

@Injectable()
export class SingletonService {

  private _timestamp = Date.now();

  public get timestamp(): number {
    return this._timestamp;
  }

}
