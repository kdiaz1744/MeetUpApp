import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import { lastValueFrom } from 'rxjs/internal/lastValueFrom';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  private http = inject(HttpClient);
  protected title = 'MeetUp App';
  protected members = signal<any>([]);

  async ngOnInit() {
    //throw new Error('Method not implemented.');

    this.http.get('https://localhost:5001/api/members').subscribe({
      next: response => this.members.set(response),
      error: error => {console.error(error)},
      complete: () => {console.log('Completed the http request')}
    })

    // This line is an example of promise usage, but it is commented out because the above subscription is preferred in this case.
    // this.members.set(await this.getMembers());
  }

  // This method is an example of promise usage with async/await, but it is commented out because the above subscription is preferred in this case.
  // async getMembers() {
  //   try {
  //     return lastValueFrom(this.http.get('https://localhost:5001/api/members'));
  //   } catch (error) {
  //     console.error(error);
  //     throw error;
  //   }
  // }

}
