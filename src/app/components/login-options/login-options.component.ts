import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { AngularFirestore } from "@angular/fire/firestore";
import * as firebase from 'firebase';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login-options',
  templateUrl: './login-options.component.html',
  styleUrls: ['./login-options.component.css']
})
export class LoginOptionsComponent implements OnInit {
  userDetails: auth.UserCredential;
  quotesArray: any;
  randomQuote: any;
  israndomQuoteGenerated: boolean = false;
  isErrorPresent: boolean = false; 
  error: any;
  isUserAtSignIn: boolean = true;
  isUserAuth: boolean = false;
  
  
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  signUpForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(public afAuth: AngularFireAuth, public db: AngularFirestore) { }

  ngOnInit() {
    this.afAuth.authState
      .subscribe((user) => {
        console.log(user);
        if(user != null)
        this.isUserAuth = true;
      });
    
    firebase.database().ref('tradingQuotes').once('value')
      .then(
        (snapshot) => {
          this.quotesArray = snapshot.val();
          this.randomQuote = this.quotesArray[Math.floor(Math.random() * 50)];
          this.israndomQuoteGenerated = true;
        }
      );
  }


  googleSingIn() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(
        (userDetails)=> {
        console.log(userDetails);
        this.userDetails = userDetails;
      })
      .catch(
        (error)=> {
          console.log(error, "Google-sign-in")
          this.isErrorPresent = true;
          this.error = error;
        }
      );
  }

  singInWithEmail() {
    if(this.loginForm.valid) {
      this.afAuth.auth.signInWithEmailAndPassword(this.loginForm.controls['email'].value, this.loginForm.controls['password'].value)
        .then((userCreds) => console.log(userCreds))
        .catch(
          (err) => {
            //console.log(err);
            this.isErrorPresent = true;
            this.error = err;
          }
        );
    }
  }

  goToSingUpFrom() {
    this.isUserAtSignIn = false;
  }
  
  singUpWithEmail() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.signUpForm.controls['email'].value, this.signUpForm.controls['password'].value)
      .then((userCreds) => console.log(userCreds))
      .catch(
        (err) => {
          console.log(err);
          this.isErrorPresent = true;
          this.error = err;
        }
      );
  }
  goBack() {
    this.isUserAtSignIn = true;
  }

  logout() {
    this.afAuth.auth.signOut();
    this.isUserAuth = false;
  }


}
