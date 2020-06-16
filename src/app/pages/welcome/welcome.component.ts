import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RssdataService } from './rssdata.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private rssDataService:RssdataService) { 

  }
  param:any
  data:any
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data=>{
      this.param=data.get('topic')
      this.rssDataService.getRssData(this.param).subscribe(data=>{
        this.data=data;
        console.log(this.data)
      })
    })
  }

}
