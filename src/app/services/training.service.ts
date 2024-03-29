import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Training } from '../model/training.model';
import { Member } from '../model/member.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private apiUrl = 'http://localhost:8080/api'; 

  constructor(private http: HttpClient) { }

  public getAllTrainings(): Observable<Training[]> {
    return this.http.get<Training[]>(`${this.apiUrl}/trainings`);
  }

  public getTrainingById(trainingId: number): Observable<Training> {
    return this.http.get<Training>(`${this.apiUrl}/trainings/${trainingId}`);
  }

  public addTraining(training: Training): Observable<Training> {
    return this.http.post<Training>(`${this.apiUrl}/trainings`, training);
  }

  public updateTraining(training: Training): Observable<Training> {
    return this.http.put<Training>(`${this.apiUrl}/trainings/${training.id}`, training);
  }

  public deleteTraining(trainingId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/trainings/${trainingId}`);
  }

  public getMembersByTrainingId(trainingId: number): Observable<Member[]> {
    return this.http.get<Member[]>(`${this.apiUrl}/members/training/${trainingId}`);
  }
}
