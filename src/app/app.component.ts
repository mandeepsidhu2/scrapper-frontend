import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  topic:any;
  constructor(
    private route: ActivatedRoute,
    private router:Router
  ) {}
  search(event:any){
    if(event.keyCode==13){
      console.log(event,this.topic)
     this.router.navigate(['welcome/'+this.topic]);
    }
  }
}
