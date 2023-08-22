import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.scss']
})
export class BigCardComponent implements OnInit{
  @Input()
  photoCoverBig:string=""
  @Input()
  cardTitleBig:string=""
  @Input()
  cardDescriptionBig:string=""
  @Input()
  link:string=""
  ngOnInit(): void {
  }

}
