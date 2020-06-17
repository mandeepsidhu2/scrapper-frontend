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
  ngOnInit(): void {
    this.loggedIn=atob(this.cookieService.get(btoa('loggedIn')))=='true'?true:false;
    this.statsService.getStats().subscribe(data=>{
      this.statsData=data.data;
    })
  }

}
