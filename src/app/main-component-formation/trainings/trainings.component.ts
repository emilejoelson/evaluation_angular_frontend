import { Component, OnInit } from '@angular/core';
import { Training } from '../../model/training.model';
import { Member } from '../../model/member.model'; // Import Member model
import { TrainingService } from '../../services/training.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css'] // Correct the styleUrl to styleUrls
})
export class TrainingsComponent implements OnInit {
  public trainings: Training[] = [];
  public selectedTraining: Training | null = null;
  public updatedTraining: Training = { id: 0, title: '', description: '', startDate: new Date(), endDate: new Date() };
  public newTraining: Training = { id: 0, title: '', description: '', startDate: new Date(), endDate: new Date() };
  public isUpdateModalVisible: boolean = false;
  public searchText: string = '';
  public membersMap: { [key: number]: Member[] } = {}; 

  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.getAllTrainings();
  }

  getAllTrainings(): void {
    this.trainingService.getAllTrainings().subscribe({
      next: trainings => this.trainings = trainings,
      error: err => console.error('Error fetching trainings:', err)
    });
  }

  viewTrainingDetails(trainingId: number): void {
    this.trainingService.getTrainingById(trainingId).subscribe({
      next: training => {
        this.selectedTraining = training;
        this.loadMembersForTraining(trainingId);
      },
      error: error => {
        console.error('Error fetching training details:', error);
      }
    });
  }

  loadMembersForTraining(trainingId: number): void {
    if (!this.membersMap[trainingId]) {
      console.log('Loading members for training with ID:', trainingId);
      this.trainingService.getMembersByTrainingId(trainingId).subscribe({
        next: members => {
          console.log('Members loaded successfully:', members);
          this.membersMap[trainingId] = members;
        },
        error: error => {
          console.error('Error fetching members for training:', error);
        }
      });
    }
  }
  

  closeTrainingDetails(): void {
    this.selectedTraining = null;
  }

  deleteTraining(training: Training): void {
    if (confirm("Are you sure?")) {
      this.trainingService.deleteTraining(training.id).subscribe({
        next: value => {
          console.log('Delete response:', value);
          this.trainings = this.trainings.filter(t => t.id !== training.id);
        },
        error: err => {
          console.error('Delete error:', err);
        }
      });
    }
  }

  closeUpdateModal(): void {
    this.isUpdateModalVisible = false;
  }

  updateTraining(): void {
    if (!this.updatedTraining) {
      console.error('No training to update.');
      return;
    }
    if (this.updatedTraining.endDate <= this.updatedTraining.startDate) {
      alert('End date must be greater than start date');
      return;
    }
    this.trainingService.updateTraining(this.updatedTraining).subscribe({
      next: updatedTraining => {
        console.log('Training updated successfully:', updatedTraining);
        this.getAllTrainings();
        this.closeUpdateModal(); 
      },
      error: err => {
        console.error('Error updating training:', err);
      }
    });
  }

  editTraining(training: Training): void {
    this.updatedTraining = { ...training }; 
    this.isUpdateModalVisible = true; 
  }
  
}
