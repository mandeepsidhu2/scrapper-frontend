import { NgModule } from '@angular/core';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
@NgModule({
  imports: [WelcomeRoutingModule,NzCardModule,CommonModule,NzAvatarModule,NzTagModule,NzIconModule,NzSpaceModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
