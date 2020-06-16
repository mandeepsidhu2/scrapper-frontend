import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RssdataService } from './rssdata.service';
import { zip } from 'rxjs';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private rssDataService:RssdataService) { 

  }
  param:any
  data:Array<any>=[]
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data=>{
      this.param=data.get('topic')
      // this.rssDataService.getRssData('medium',this.param).subscribe(data=>{
      //   this.data=data;
      //   console.log(this.data)
      // })
    let medium=this.rssDataService.getRssData('medium',this.param)
    let reddit=this.rssDataService.getRssData('reddit',this.param)
    let devto=this.rssDataService.getRssData('devto',this.param)
    let total=zip(medium,reddit,devto,(medium:any,reddit:any,devto:any)=>({medium,reddit,devto})).subscribe(
      triplet=>{
       
        this.data=triplet.reddit
        for(let i=0;i<triplet.medium.length;i++)
        this.data.push(triplet.medium[i])
        for(let i=0;i<triplet.devto.length;i++)
        this.data.push(triplet.devto[i])
        this.data=shuffle(this.data)
      }
    )
    })
  }

}
function shuffle(array:Array<any>):Array<any>{
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
return array;
}