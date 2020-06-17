import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private statsService:StatsService,private cookieService:CookieService) { 
  }
  statsData:any
  loggedIn:Boolean;
  loading:Boolean=true;
  ngOnInit(): void {
    this.loading=true;
    this.loggedIn=atob(this.cookieService.get(btoa('loggedIn')))=='true'?true:false;
    this.statsService.getStats().subscribe(data=>{
      this.statsData=data.data;
      this.loading=false;
    })
  }
  refresh(){
    this.loading=true;
    this.statsService.getStats().subscribe(data=>{
      this.statsData=data.data;
      this.loading=false;
    })
  }

}
