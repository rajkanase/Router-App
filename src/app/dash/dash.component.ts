import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  user:string;

  constructor(
    private actRt : ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.user);
    
    this.user=this.actRt.snapshot.params['usNm'];
  }

}
