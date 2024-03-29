import { Component, OnInit } from '@angular/core';
import { Member } from '../../model/member.model';
import { TrainingService } from '../../services/training.service';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  public members: Member[] = [];

  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.getAllMembers();
  }

  getAllMembers(): void {
    this.memberService.getAllMembers().subscribe({
      next: members => {
        this.members = members;
      },
      error: err => console.error('Error fetching members:', err)
    });
  }
}
