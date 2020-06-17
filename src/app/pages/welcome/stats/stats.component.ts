import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private statsService:StatsService) { 
  }
  statsData:any
  ngOnInit(): void {
    this.statsService.getStats().subscribe(data=>{
      this.statsData=data.data;
    })
  }

}
