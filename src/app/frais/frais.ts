export class Frais {

    id: number;                     //son id
    typeFrais: string;      //types de frais(restaurant, hotel..)
    datePaiement: Date             //Date de Paiement
    description: string;            //Description
    montant: number;                //Montant
    typePaiement: string;          //types de paiement(espèces, chèque, CB..)
    justificatif: string;           //url de son image
    createdAt: Date;               //date de création
    createdBy: string;             //Création par
    lastUpdatedAt: Date;          //Date Modification
    lastUpdatedBy: string;        //Modifié par
    client: string;               //id client qui induit le frais

    //initialisations par défaut
    constructor() { 
      this.id=0;
      this.createdAt = new Date();
      //this.typeFrais = [];
    }
}
