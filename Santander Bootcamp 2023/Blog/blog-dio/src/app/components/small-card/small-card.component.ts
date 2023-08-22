import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.scss']
})
export class SmallCardComponent implements OnInit{
  @Input()
  photoCoverSmall:string=""
  @Input()
  cardTitleSmall:string=""
  @Input()
  cardDescriptionSmall:string=""
  @Input()
  link:string=""
  ngOnInit(): void {
  }

}
