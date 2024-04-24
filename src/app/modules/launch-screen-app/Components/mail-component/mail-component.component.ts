import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mail-component',
  templateUrl: './mail-component.component.html',
  styleUrls: ['./mail-component.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible => hidden', animate('2000ms ease-out')),
      transition('hidden => visible', animate('2000ms ease-in')),
    ]),
  ],
})
export class MailComponentComponent implements OnInit {
  constructor(private router: Router) {}
  showContent: boolean = false;
  rightContentVisible: boolean = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.showContent = true;
    }, 1000); // Delay of 10 seconds (10000 milliseconds)
  }
  loadPreviousPage() {
    this.router.navigate(['/animated-home']);
  }

  goAbout() {
    this.router.navigate(['/about']);
  }
  goSkills() {
    this.router.navigate(['/skills']);
  }
  goProjects() {
    this.router.navigate(['/projects']);
  }
}
