import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {debounceTime, delay} from 'rxjs/operators';

@Component({
  selector: 'course-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {


  public signUpForm: FormGroup;

  public formWithEmail: FormGroup = new FormGroup({
    emails: new FormArray([new FormControl('')])
  });

  public constructor(
    private _fb: FormBuilder
  ) {
  }

  public ngOnInit(): void {
    this.signUpForm = this._fb.group({
      firstName: [
        '',
        null, [this._nameAsyncValidator]],
      lastName: [
        '',
        [Validators.required, Validators.minLength(4)]],
      email: [''],
      password: ['']

    });
  }

  private _nameAsyncValidator({value}: FormControl): Observable<ValidationErrors | null> {
    const valid: boolean = /^[a-zA-Z]*$/.test(value);
    const err = valid
      ? null
      : {nospecial: 'Wrong Name symbols'};
    return of(err).pipe(
      debounceTime(300),
      delay(5000));
  }

  public sendForm(value: { [key: string]: string }) {
    console.log(value);
  }

  public addEmail(): void {
    (this.formWithEmail.get('emails') as FormArray)
      .push(new FormControl(''));
  }

  public removeEmail(index: number): void {
    (this.formWithEmail.get('emails') as FormArray)
      .removeAt(index);
  }
}


