import { NgModule } from '@angular/core';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { StatsComponent } from './stats/stats.component';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

@NgModule({
  imports: [NzStatisticModule,NzButtonModule,WelcomeRoutingModule,NzCardModule,CommonModule,NzAvatarModule,NzTagModule,NzIconModule,NzSpaceModule],
  declarations: [WelcomeComponent, StatsComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
