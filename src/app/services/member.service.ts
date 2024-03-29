import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from '../model/member.model';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private apiUrl = 'http://localhost:8080/api/members'; 

  constructor(private http: HttpClient) { }

  public addMember(newMember: Member, trainingId: number): Observable<Member> {
    return this.http.post<Member>(`${this.apiUrl}/${trainingId}`, newMember);
  }

  
  getAllMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.apiUrl);
  }

  addMemberWithTrainingId(member: Member, trainingId: number): Observable<Member> {
    return this.http.post<Member>(`${this.apiUrl}/${trainingId}`, member);
  }
}
