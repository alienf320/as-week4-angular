import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarComponent } from './bar/bar.component';
import { ProjectsComponent } from './projects/projects.component';
import { LastUpdatesComponent } from './last-updates/last-updates.component';
import { XxIndexComponent } from './xx-index/xx-index.component';
import { DataInfoComponent } from './data-info/data-info.component';
import { SingleProjectComponent } from './single-project/single-project.component';
import { UpdateComponent } from './update/update.component';
import { TeamComponent } from './team/team.component';
import { MemberComponent } from './member/member.component';

@NgModule({
  declarations: [
    AppComponent,
    BarComponent,
    ProjectsComponent,
    LastUpdatesComponent,
    XxIndexComponent,
    DataInfoComponent,
    SingleProjectComponent,
    UpdateComponent,
    TeamComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
