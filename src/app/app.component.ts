import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyDG_Yf4kpx6YiZS0fzJ-OiUj81nN6XYddY',
      authDomain: 'projectouf-16f66.firebaseapp.com',
      databaseURL: 'https://projectouf-16f66.firebaseio.com',
      projectId: 'projectouf-16f66',
      storageBucket: '',
      messagingSenderId: '845712747021'
    };
    firebase.initializeApp(config);
  }
}
