export class MassCategory {
  header: string;
  order: number;
  massess: Mass[];
  updatedDate: string;

  constructor() {
    this.header = '';
    this.order = 0;
    this.massess = [];
    this.updatedDate = new Date().toDateString();
  }
}

export class Mass {
  name: string;
  maharagama: string[];
  boralesgamuwa: string[];
  order: number;

  constructor() {
    this.name = '';
    this.maharagama = [""];
    this.boralesgamuwa = [""];
    this.order = 0;
  }
}
