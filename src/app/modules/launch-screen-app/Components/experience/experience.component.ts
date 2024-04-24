import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
})
export class ExperienceComponent implements OnInit {
  constructor(private router: Router) {}
  showContent: boolean = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.showContent = true;
    }, 1000); // Delay of 10 seconds (10000 milliseconds)
  }
  loadPreviousPage() {
    console.log('checked!');

    this.router.navigate(['/animated-home']);
  }

  // Define pdfUrl as a class property
  pdfUrl: string = '../../../../../assets/images/';

  downloadExpreience() {
    // Define the URL of the PDF file
    const pdfUrl: string = '../../../../../assets/images/project image/GETster.TECH Experince Letter ';

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;

    // Set the download attribute to force download
    link.download = '';

    // Append the anchor element to the document body
    document.body.appendChild(link);

    // Simulate a click on the anchor element to trigger the download
    link.click();

    // Remove the anchor element from the document body
    document.body.removeChild(link);
  }


  downloadReleiving() {
    // Define the URL of the PDF file
    const pdfUrl: string = '../../../../../assets/images/project image/Relieving Letter for ';

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;

    // Set the download attribute to force download
    link.download = '.pdf';

    // Append the anchor element to the document body
    document.body.appendChild(link);

    // Simulate a click on the anchor element to trigger the download
    link.click();

    // Remove the anchor element from the document body
    document.body.removeChild(link);
  }
  downloadPayslip() {
    // Define the URL of the PDF file
    const pdfUrl: string = '../../../../../assets/images/project image/payslip.pdf';

    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = pdfUrl;

    // Set the download attribute to force download
    link.download = '.pdf';

    // Append the anchor element to the document body
    document.body.appendChild(link);

    // Simulate a click on the anchor element to trigger the download
    link.click();

    // Remove the anchor element from the document body
    document.body.removeChild(link);
  }
}
