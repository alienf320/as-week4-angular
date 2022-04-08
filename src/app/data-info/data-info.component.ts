import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-info',
  templateUrl: './data-info.component.html',
  styleUrls: ['./data-info.component.css']
})
export class DataInfoComponent implements OnInit {  

  data = {
    titles: ["Number of items", "Team ranking", "Project Visit"],
    values: [56, 8, 2223]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
