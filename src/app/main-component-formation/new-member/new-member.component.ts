import { Component, OnInit } from '@angular/core';
import { MemberService } from '../../services/member.service';
import { Member } from '../../model/member.model';
import { Training } from '../../model/training.model';
import { TrainingService } from '../../services/training.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {
  public newMember: Member = { id: 0, firstname: '', lastname: '', training: null };
  public trainings: Training[] = [];
  public selectedTrainingId: number | undefined;

  constructor(private memberService: MemberService, private trainingService: TrainingService,private router: Router) { }

  ngOnInit(): void {
    this.loadTrainings();
  }

  loadTrainings(): void {
    this.trainingService.getAllTrainings().subscribe({
      next: trainings => {
        this.trainings = trainings;
      },
      error: err => {
        console.error('Error fetching trainings:', err);
      }
    });
  }

  addMember(){
    if (!this.newMember.firstname || !this.newMember.lastname || !this.selectedTrainingId) {
      return;
    }
  
    this.newMember.training = { id: this.selectedTrainingId, title: '', description: '', startDate: new Date(), endDate: new Date() };
    
    this.memberService.addMemberWithTrainingId(this.newMember, this.selectedTrainingId).subscribe({
      next: createdMember => {
        this.newMember = { id: 0, firstname: '', lastname: '', training: null };
        this.selectedTrainingId = undefined;
        this.router.navigate(['/members']); 
      },
  
      error: err => {
        console.error('Error adding member:', err);
      }
    });
  }
  
  
}
