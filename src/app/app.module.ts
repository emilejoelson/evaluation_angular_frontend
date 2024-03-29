import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MembersComponent } from './main-component-formation/members/members.component';
import { NewMemberComponent } from './main-component-formation/new-member/new-member.component';
import { TrainingModalComponent } from './modal/training-modal/training-modal.component';
import { UpdateTrainingModalComponent } from './modal/update-training-modal/update-training-modal.component';
import { TrainingFilterPipe } from './pipe/training-filter.pipe';
import { TrainingsComponent } from './main-component-formation/trainings/trainings.component';
import { NewTrainingComponent } from './main-component-formation/new-training/new-training.component';


@NgModule({
  declarations: [
    AppComponent,
    TrainingsComponent,
    NewTrainingComponent,
    MembersComponent,
    NewMemberComponent,
    TrainingModalComponent,
    UpdateTrainingModalComponent,
    TrainingFilterPipe,
    TrainingsComponent,
    NewTrainingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
