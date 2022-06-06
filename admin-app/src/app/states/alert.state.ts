import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Alert } from '../models/staticData.interface';
import { BaseStateObject } from './base.state';
@Injectable({
  providedIn: 'root'
})
export class AlertState extends BaseStateObject<Alert> {

  constructor(db: AngularFireDatabase) { 
      super(db, 'alerts');
  }

}