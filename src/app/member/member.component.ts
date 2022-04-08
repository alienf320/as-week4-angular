import { Component, OnInit } from '@angular/core';
import { MemberData } from '../members-data';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  members = MemberData;

  constructor() { }

  ngOnInit(): void {
  }

}
