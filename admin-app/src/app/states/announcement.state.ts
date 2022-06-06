import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { Announcement } from "../models/announcment.interface";
import { BaseStateList } from "./base.state";

@Injectable({
    providedIn: 'root'
  })
  export class AnnouncementState extends BaseStateList<Announcement> {
  
    constructor(db: AngularFireDatabase) { 
        super(db, 'announcements');
    }
  
  }