import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembersComponent } from './main-component-formation/members/members.component';
import { NewMemberComponent } from './main-component-formation/new-member/new-member.component';
import { TrainingsComponent } from './main-component-formation/trainings/trainings.component';
import { NewTrainingComponent } from './main-component-formation/new-training/new-training.component';

const routes: Routes = [
  {path:"trainings",component:TrainingsComponent},
  {path:"new-training",component:NewTrainingComponent},
  {path:"members",component:MembersComponent},
  {path:"new-member",component:NewMemberComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
