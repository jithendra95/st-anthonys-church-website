import { Component, OnInit } from '@angular/core';
import { BibleVerse, StaticData } from 'src/app/models/staticData.interface';
import { ToastService } from 'src/app/services/toast.service';
import { BibleVerseState } from 'src/app/states/bibleVerse.state';
import { StaticDataState } from 'src/app/states/staticData.state';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss'],
})
export class GeneralComponent implements OnInit {
  staticData: StaticData | null = new StaticData();
  bibleVerse: BibleVerse | null = new BibleVerse();

  changeDetected = false;

  constructor(
    public staticDataState: StaticDataState,
    public bibleVerseState: BibleVerseState,
    private toastService: ToastService
  ) {
    this.init();
  }

  async init() {
    await this.staticDataState.readAll();
    await this.bibleVerseState.readAll();

    this.staticData = this.staticDataState.get();
    this.bibleVerse = this.bibleVerseState.get();
  }

  ngOnInit(): void {}

  publish() {
    this.staticDataState.update(this.staticData!, null);
    this.bibleVerseState.update(this.bibleVerse!, null);
    this.changeDetected = false;
    this.toastService.showToast("General Info Published", '');
  }

  detectChange(): void {
    this.changeDetected = true;
  }

  addTime() {
    this.staticData?.times.push('');
    this.detectChange();
  }

  removeTime(index: number) {
    this.staticData?.times.splice(index, 1);
    this.detectChange();
  }
}
