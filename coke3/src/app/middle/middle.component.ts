import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent {
  constructor () {
  }
  ngOnInit(): void {  
  }
  onSubmit(form: NgForm) {
    console.log(form)
  }
  
}
