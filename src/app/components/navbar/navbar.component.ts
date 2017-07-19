import { Observable } from 'rxjs/Rx';
import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<firebase.User>;
  authenticated: boolean = false;

  constructor(public af: AngularFireAuth) {
    this.af.authState.subscribe(
      (auth) => {
        if (auth != null) {
          this.user = af.authState;
          this.authenticated = true;
        }
      });
  }

  ngOnInit() {
  }

  login() {
    this.authenticated = true;
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

   logout() {
     this.authenticated = false;
    this.af.auth.signOut();
  }
}
