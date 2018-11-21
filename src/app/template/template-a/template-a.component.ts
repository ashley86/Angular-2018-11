import { Component, OnInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-template-a',
  templateUrl: './template-a.component.html',
  styleUrls: ['./template-a.component.scss']
})
export class TemplateAComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit() {
  }

}
