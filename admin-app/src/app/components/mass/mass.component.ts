import { Component, OnInit } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { MassCategory } from 'src/app/models/masses.interface';
import { MassState } from 'src/app/states/mass.state';

@Component({
  selector: 'app-mass',
  templateUrl: './mass.component.html',
  styleUrls: ['./mass.component.scss']
})
export class MassComponent implements OnInit {

  massCategoryList: MassCategory[] = [];
  constructor(public massState: MassState) { 
    this.init();
  }

  async init(){
    await this.massState.loadList();
    this.massState.getList$().subscribe(list=>{
      this.massCategoryList = list as MassCategory[];
    })
  }

  ngOnInit(): void {
  }

}
