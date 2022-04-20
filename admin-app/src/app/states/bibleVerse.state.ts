import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { BibleVerse } from "../models/staticData.interface";
import { BaseStateObject } from "./base.state";

@Injectable({
    providedIn: 'root'
  })
export class BibleVerseState extends BaseStateObject<BibleVerse> {

    constructor(db: AngularFireDatabase) { 
        super(db, 'bible_verse');
    }
  
  }