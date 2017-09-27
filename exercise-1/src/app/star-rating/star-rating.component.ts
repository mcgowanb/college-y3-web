import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'star-rating',
  template: `
  <div class="crop" 
  [style.width.px]="starWidth"
  [title]="rating"
  (click)="onClick()">
  <div style="width: 86px">
      <span class="glyphicon glyphicon-star"></span>
      <span class="glyphicon glyphicon-star"></span>
      <span class="glyphicon glyphicon-star"></span>
      <span class="glyphicon glyphicon-star"></span>
      <span class="glyphicon glyphicon-star"></span>
  </div>
</div>`,
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input() rating: number;
  starWidth: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.starWidth = this.rating * 86 / 5;
  }


}
