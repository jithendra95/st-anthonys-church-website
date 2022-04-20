import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { BaseStateObject } from './base.state';
import { BibleVerse, StaticData} from '../models/staticData.interface';
@Injectable({
  providedIn: 'root'
})
export class StaticDataState extends BaseStateObject<StaticData> {

  constructor(db: AngularFireDatabase) { 
      super(db, 'static_data');
  }

}

