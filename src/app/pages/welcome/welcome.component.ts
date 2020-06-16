import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { 

  }
  param:any
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data=>{
      this.param=data.get('topic')
      console.log(data)
    })
  }

}
