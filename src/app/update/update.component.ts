import { Component, OnInit } from '@angular/core';
import { DataUpdate } from '../udpate-date';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  updates = DataUpdate;

  constructor() { }

  ngOnInit(): void {
  }

}
