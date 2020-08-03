export class Frais {

    id: number;                     //son id
    typeFrais: string;              //types de frais(restaurant, hotel..)
    datePaiement: Date             //Date de Paiement
    description: string;           //Description
    montant: number;               //Montant
    typePaiement: string;         //types de paiement(espèces, chèque, CB..)
    justificatif: string;         //url de son image
    createdAt: Date;              //date de création
    createdBy: string;            //Création par
    lastUpdateAt: Date;           //Date Modification
    lastUpdateBy: string;         //Modifié par
    client: string;               //id client qui induit le frais

    //initialisations par défaut
    constructor() { 
      this.typeFrais='resto';
      //this.datePaiement= new Date();
      //this.description= 'test';
      //this.montant=20;
      //this.typePaiement= 'cb';
      this.justificatif='';
      this.createdAt = new Date();
      this.createdBy= '';
      this.lastUpdateAt= new Date();
      this.lastUpdateBy= '';  
      //this.typeFrais = [];
      //this.client="/api/clients/4";

      
    }
}
