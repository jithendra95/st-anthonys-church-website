import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { User } from "../models/user.interface";
import { BaseStateObject } from "./base.state";

@Injectable({
    providedIn: 'root'
  })
  export class UserState extends BaseStateObject<User> {
  
    loaded = false;
    constructor(db: AngularFireDatabase) { 
        super(db, 'user');
    }

    override async read(id: string | number): Promise<boolean> {
        await super.read(id);
        if(!this.loaded)
          this.loaded = true;

        return true;
    }

    override unload(): void {
      super.unload();
      this.loaded = false;
    }
  
  }