export class Announcement {
  title: string;
  link: string;
  linkText: string;
  sub_items: string[];

  constructor() {
    this.title = '';
    this.link = '';
    this.linkText = '';
    this.sub_items = [];
  }
}
