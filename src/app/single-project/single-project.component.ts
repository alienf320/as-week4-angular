import { Component, OnInit } from '@angular/core';
import { DataProjects } from '../projects-data';


@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.css']
})
export class SingleProjectComponent implements OnInit {

  projects = DataProjects;

  constructor() { }

  ngOnInit(): void {
  }

}
