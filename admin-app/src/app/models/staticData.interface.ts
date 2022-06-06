export class StaticData{
    address:string;
    officeDay: string;
    location: string;
    phoneNo: string;
    priestName: string;
    times: string[];

    constructor(){
        this.address = "";
        this.officeDay = "";
        this.location = "";
        this.phoneNo = "";
        this.priestName = "";
        this.times = [""];
    }
}

export class BibleVerse{
    text:string;
    verse: string;

    constructor(){
        this.text = "";
        this.verse = "";
    }
}

export enum AlertLevel{
    warn =1,
    danger = 0
}

export class Alert{
    body:string;
    header: string;
    level: AlertLevel

    constructor(){
        this.body = "";
        this.header = "";
        this.level = AlertLevel.warn;
    }
}