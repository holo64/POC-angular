export class Frais {

    id: number;                     //son id
    type_frais: Array<string>;      //types de frais(restaurant, hotel..)
    date_paiement: Date             //Date de Paiement
    description: string;            //Description
    montant: number;                //Montant
    type_paiement: string;          //types de paiement(espèces, chèque, CB..)
    justificatif: string;           //url de son image
    created_at: Date;               //date de création
    created_by: string;             //Création par
    last_updated_at: Date;          //Date Modification
    last_updated_by: string;        //Modifié par

    //initialisations par défaut
    constructor() { 
      this.id=0;
      this.created_at = new Date();
      this.type_frais = [];
    }
}
