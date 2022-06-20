import { Component, OnInit, } from '@angular/core';
import { ReviewForm } from '../review-form';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.scss']
})
export class ReviewFormComponent implements OnInit {

  rf=new ReviewForm
  constructor() { }

  ngOnInit(): void {
  }

  ratings=[0,1,1.5,2,2.5,3,3.5,4,4.5,5]

  submitForm(){
    console.log("sucessfully")
  }
}
