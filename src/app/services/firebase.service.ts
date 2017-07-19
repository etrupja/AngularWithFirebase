// import { AngularFireModule } from 'angularfire2';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class FirebaseService {
  listings: FirebaseListObservable<any[]>;

  constructor(private db: AngularFireDatabase) {
   }

   getListings() {
      this.listings = this.db.list('/listings') as FirebaseListObservable<Listing[]>;
      return this.listings;
   }
}


// tslint:disable-next-line:one-line
interface Listing{
  $key?: string;
  title?: string;
  type?: string;
  iamge?: string;
  city?: string;
  owner?: string;
  bedrooms?: string;
}
