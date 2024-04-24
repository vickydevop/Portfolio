import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  constructor(private router: Router) {}
  showContent: boolean = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.showContent = true;
    }, 1000); // Delay of 10 seconds (10000 milliseconds)
  }
  loadPreviousPage() {
    this.router.navigate(['/animated-home']);
  }

  git(e: any) {
    if (e == 1) {
      const link =
        'https://github.com/vickydevop/Manage-WOW-Flashcards-';
      window.open(link, '_blank');
    } else if (e == 2) {
      const link = 'https://github.com/vickydevop/Holidays-Non-Operational-Days';
      window.open(link, '_blank');
    } else if (e == 3) {
      const link = 'https://github.com/vickydevop/Wow-Local-Staff-Management-FrontEnd';
      window.open(link, '_blank');
    } else if (e == 4) {
      const link = '';
      window.open(link, '_blank');
    } else if (e == 5) {
      const link = 'https://github.com/vickydevop/Linked-Other-Subjects-frontend';
      window.open(link, '_blank');
    } else if (e == 6) {
      const link = 'https://github.com/vickydevop/EDIT-Global-Course-Subject-of-Your-Interest-Frontend';
      window.open(link, '_blank');
    } else {
      console.log('No project');
    }
  }
}
