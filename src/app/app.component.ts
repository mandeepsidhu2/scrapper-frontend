import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService } from "angularx-social-login";
import {  GoogleLoginProvider } from "angularx-social-login";
import {CookieService} from "ngx-cookie-service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;
  topic:any;
  userName:any;
  imageUrl:any;
  userData:any
  constructor(
    private router:Router,
    private authService: SocialAuthService,
    private cookieService: CookieService
  ) {}
  loggedIn:Boolean=false;

  ngOnInit() {
    this.loggedIn=atob(this.cookieService.get(btoa('loggedIn')))=='true'?true:false;
   if(this.loggedIn){
    this.userName=this.cookieService.get('name')
    this.imageUrl=this.cookieService.get('imageUrl')
   }
  }
  openStats(){
    this.router.navigate(['stats']);
  }
  signInWithGoogle(): void {
    this.userData=this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(data=>{
      this.cookieService.set(btoa('loggedIn'), btoa('true'));
      this.loggedIn=true;
      this.cookieService.set('name',data['name'])
      this.cookieService.set('imageUrl',data['photoUrl'])
      this.userName=this.cookieService.get('name')
      this.imageUrl=this.cookieService.get('imageUrl')
      console.log(this.cookieService.get('name'))
      return data
    });
   
  }
  signOut(): void {
    this.cookieService.set(btoa('loggedIn'), btoa('false'));
    this.cookieService.delete('name')
    this.cookieService.delete('loggedIn')
    this.cookieService.delete('imageUrl')
    this.loggedIn=false;
    this.authService.signOut();
  }
  search(event:any){
    if(event.keyCode==13)
     this.router.navigate([this.topic]);
    
  }
}
