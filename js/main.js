class Karatavas {
    constructor(id) {
        this.konteineris = document.getElementById(id);
        console.log(this.konteineris);
        if (this.konteineris){
        this.konteineris.innerHTML = "Te būs spēle";
        }
        this.statuss = Karatavas.STATUSS_NEINICIALIZETS;
    }
    novakt() {
        if (this.konteineris){
            this.konteineris.innerHTML = "";
        }
        delete this.konteineris;
        this.statuss = Karatavas.STATUSS_NOVAKTS;
    }
} 

//statiskās propertijas
Karatavas.STATUSS_NEINICIALIZETS = 0;
Karatavas.STATUSS_SPELE = 1;
Karatavas.STATUSS_UZVARA = 2;
Karatavas.STATUSS_ZAUDEJUMS = 3;
Karatavas.STATUSS_NOVAKTS = 9;