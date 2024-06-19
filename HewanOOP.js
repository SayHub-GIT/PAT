class Hewan {
    constructor(nama, umur, mamalia) {
        this.nama = nama;
        this.umur = umur;
        this.mamalia = mamalia;
    }
}

class JaguarHitam extends Hewan {
    constructor(nama, umur) {
        super(nama, umur, true);

    }


    makan() {
        return `${this.nama} lagi melahap manusia VvV`;
    }
}

class BurungGaruda extends Hewan {
    constructor(nama, umur) {
        super(nama, umur, false);
    }


    terbang() {
        return `${this.nama} dia bisa terbang!`;
    }
}

class BuayaDarat extends Hewan {
    constructor(nama, umur) {
        super(nama, umur, false);
    }

    berjemur() {
        return `${this.nama} sedang berjemur (santai dulu gak seh)`;
    }
}

let jaguar = new JaguarHitam("Jaguar Hitam", 5);
console.log(jaguar.makan());

let garuda = new BurungGaruda("Garuda", 10);
console.log(garuda.terbang());

let buaya = new BuayaDarat("Buaya Darat", 3);
console.log(buaya.berjemur());










