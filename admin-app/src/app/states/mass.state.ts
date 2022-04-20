import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { MassCategory } from "../models/masses.interface";
import { BaseStateList } from "./base.state";

@Injectable({
    providedIn: 'root'
  })
  export class MassState extends BaseStateList<MassCategory> {
  
    constructor(db: AngularFireDatabase) { 
        super(db, 'masses');
    }
  
  }