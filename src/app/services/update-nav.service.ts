import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators'
import { MethodCall } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UpdateNavService {

  getProjects: AngularFirestoreCollection;
  getProject: Observable<any>

  getLanguages: AngularFirestoreCollection;
  getLanguage: Observable<any>;

  addMessages: AngularFirestoreCollection;
  addMessage: Observable<any>

  private updateNavBarSource = new Subject<any>();
  updateNavBar$ = this.updateNavBarSource.asObservable();

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) 
  { 
    this.getProjects = this.afs.collection('myProjects');
    this.getLanguages = this.afs.collection('myLanguages');
    this.addMessages = this.afs.collection('myMessages')
 }

  updateNav(method){
    this.updateNavBarSource.next(method);
  }

  // get projects from firestore
  getProj(): Observable<any>{
    this.getProject = this.getProjects.snapshotChanges().pipe(map( result => {
      return result.map( results => {
        const data = results.payload.doc.data();
        data.id = results.payload;
        return data
      });
    }));
    return this.getProject;
   }

   // get languages from firestore
   getLang(): Observable<any>{
    this.getLanguage = this.getLanguages.snapshotChanges().pipe(map( result => {
      return result.map( results => {
        const data = results.payload.doc.data();
        data.id = results.payload;
        return data
      });
    }));
    return this.getLanguage;
   }

  //  login method
   login(value){
     return new Promise((resolve, reject) => {
       this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password).then( userData => (
         resolve(userData), err => reject(err)
       ))
     })

   }

   // store messages in firestor
   submitMessage(message){
    this.addMessages.add(message);
    console.log(message)

   }

}
