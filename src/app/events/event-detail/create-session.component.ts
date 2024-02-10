import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession } from '../index';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styles: [
    `
    em {float:right; color: #E05C65; padding-left:10px}
    .error input {background-color: #E3C3C5}
    .error ::-webkit-input-placeholder {color: #999}
    .error ::-moz-placeholder {color: #999}
    .error :-moz-placeholder {color: #999}
    .error :ms-input-placeholder {color: #999}

  `
  ]
})
export class CreateSessionComponent implements OnInit {
  
  @Output() saveNewSession = new EventEmitter()
  @Output() cancelAddSession = new EventEmitter()

  newSessionForm: FormGroup = new FormGroup({})

  name: FormControl = new FormControl
  presenter: FormControl = new FormControl
  duration: FormControl = new FormControl
  level: FormControl = new FormControl
  abstract: FormControl = new FormControl

  constructor() { }

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required)
    this.presenter = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.level = new FormControl('', Validators.required)
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(200)])
    //this.abstract = new FormControl('', [Validators.required, Validators.maxLength(200), this.restrictedWords(['foo','var'])])

    this.newSessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      abstract: this.abstract
    })

  }

  private restrictedWords(words: any) {
    return (control: FormControl): { [key: string]: any } => {

      if(!words) {
        return {}
      }

      //console.log(words)

      var invalidWords = words.map((w: any) => control.value.includes(w) ? w : {}).filter((w: any) => w != null)

      return invalidWords && invalidWords.length > 0 ? {'restrictedWords': invalidWords.join(', ')} : {}
      // return control.value.includes('foo') ? {'restrictedWords': 'foo'} : {}
    }
  } 

  saveSession(formValues: any) {
    // console.log(formValues)
    let session: ISession = {
      id: 0,
      name: formValues.name,
      presenter: formValues.presenter,
      duration: formValues.duration,
      level: formValues.level,
      abstract: formValues.abstract,
      voters: []
    }
    console.log(session)
    this.saveNewSession.emit(session)
  }

  cancelAddNewSession() {
    this.cancelAddSession.emit()
  }

}
