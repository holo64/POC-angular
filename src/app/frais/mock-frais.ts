import { Frais } from './frais';
 
export const FRAIS: Frais[] = [
  {
    id: 1,                                  //son id
    type_frais: ["restaurant"],             //types de frais(restaurant, hotel..)
    date_paiement: new Date("2020-05-21"),  //Date de Paiement
    description: "Dodu",                    //Description
    montant: 110,                           //Montant
    type_paiement: "CB",                    //types de paiement(espèces, chèque, CB..)
    justificatif: "",                       //url de son image
    created_at:  new Date("2020-05-21"),     //date de création
    created_by: 'Peter',                    //Création par
    last_updated_at:  new Date("2020-05-21"), //Date Modification
    last_updated_by: 'Peter'                 //Modifié par

  },
  {
    id: 2,                                  //son id
    type_frais: ["hotel"],                  //types de frais(restaurant, hotel..)
    date_paiement:  new Date("2020-05-21"),  //Date de Paiement
    description: "Dodo",                    //Description
    montant: 150,                           //Montant
    type_paiement: "CB",                    //types de paiement(espèces, chèque, CB..)
    justificatif: "",                       //url de son image
    created_at:  new Date("2020-05-21"),     //date de création
    created_by: 'Peter',                    //Création par
    last_updated_at:  new Date("2020-05-21"), //Date Modification
    last_updated_by: 'Peter'                 //Modifié par

  }
  
];