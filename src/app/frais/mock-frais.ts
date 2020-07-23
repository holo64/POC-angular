import { Frais } from './frais';
 
export const FRAIS: Frais[] = [
  {
    id: 1,                                  //son id
    typeFrais: "restaurant",             //types de frais(restaurant, hotel..)
    datePaiement: new Date("2020-05-21"),  //Date de Paiement
    description: "Dodu",                    //Description
    montant: 110,                           //Montant
    typePaiement: "CB",                    //types de paiement(espèces, chèque, CB..)
    justificatif: "",                       //url de son image
    createdAt:  new Date("2020-05-21"),     //date de création
    createdBy: 'Peter',                    //Création par
    lastUpdatedAt:  new Date("2020-05-21"), //Date Modification
    lastUpdatedBy: 'Peter'                 //Modifié par

  },
  {
    id: 2,                                  //son id
    typeFrais: "hotel",                  //types de frais(restaurant, hotel..)
    datePaiement:  new Date("2020-05-21"),  //Date de Paiement
    description: "Dodo",                    //Description
    montant: 150,                           //Montant
    typePaiement: "CB",                    //types de paiement(espèces, chèque, CB..)
    justificatif: "",                       //url de son image
    createdAt:  new Date("2020-05-21"),     //date de création
    createdBy: 'Peter',                    //Création par
    lastUpdatedAt:  new Date("2020-05-21"), //Date Modification
    lastUpdatedBy: 'Peter'                 //Modifié par

  }
  
];