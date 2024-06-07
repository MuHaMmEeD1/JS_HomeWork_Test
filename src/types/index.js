export class MyString {
  constructor(str) {
    this.str = str;
  }

  remove(index) {
    if (index >= 0 && index < this.str.length) {
      return this.str.slice(0, index) + this.str.slice(index + 1);
    }
    return this.str;
  }

  insert(index, simvole) {
    if (index < 0) {
      return simvole + this.str;
    } else if (index > 0 && index <= this.str.length) {
      return this.str.slice(0, index) + simvole + this.str.slice(index + 1);
    } else if (index > this.str.length) {
      return this.str + simvole;
    } else {
      return simvole + this.str.slice(1, this.str.length);
    }
  }

  trimSign() {
    return this.str.replace(/(.)\1+/g, "$1");
  }

  toggle() {
    return this.str.replace(/[a-zA-Z]/g, (mt) => {
      return mt === mt.toUpperCase() ? mt.toLowerCase() : mt.toUpperCase();
    });
  }

  counter(char) {
    const regex = new RegExp(char, "g");
    const mt = this.str.match(regex);
    return mt ? mt.length : 0;
  }
}

export class MyDate {
  constructor(gun, ay, il) {
    this.gun = gun;
    this.ay = ay;
    this.il = il;
  }

  isLeapYear() {
    const date = new Date();
    const myDate = new Date(this.il, this.ay - 1, this.gun);

    let check1 = date.getFullYear() <= myDate.getFullYear();
    if (check1) {
      let check2 = date.getMonth() <= myDate.getMonth();
      if (check2) {
        if (date.getDay() < date.getDay() || check1 || check2) {
          return true;
        }
      }
    }
    return false;
  }

  isFuture() {
    const date = new Date();
    const myDate = new Date(this.il, this.ay - 1, this.gun);

    let check1 = date.getFullYear() <= myDate.getFullYear();
    if (check1) {
      let check2 = date.getMonth() <= myDate.getMonth();
      if (check2 || check1) {
        if (date.getDay() < date.getDay() || check1 || check2) {
          return true;
        }
      }
    }
    return false;
  }

  nextDay() {
    const ayinGunlari = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let gun = this.gun + 1;
    let ay = this.ay;
    let il = this.il;

    if (gun > ayinGunlari[ay - 1]) {
      gun = 1;
      ay++;
      if (ay > 12) {
        ay = 1;
        il++;
      }
      if (ay === 2 && gun === 29) {
        gun = 1;
        ay++;
      }
    } else if (gun === 1 && ay > 1) {
      ay--;
      gun = ayinGunlari[ay - 1];
    }

    return `${gun}/${ay}/${il}`;
  }
}
