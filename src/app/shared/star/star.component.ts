import { Component, Input, OnChanges, OnInit, Output, SimpleChanges , EventEmitter } from '@angular/core';


@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnInit,OnChanges {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  rating:any=0
  starwidth=0
  ngOnChanges(){
    this.starwidth=this.rating*20
  }

  //emmiting value for parent

  @Output()
  SendRating =new EventEmitter<number>() 

  brodcasting(){
    console.log(this.rating);
    this.SendRating.emit(this.rating)
  }

  

}
