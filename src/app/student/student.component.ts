import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    console.log(form);
   }
 
}

