import { Client } from './client.model';

import { Equipement } from './equipement.model';
import { Facture } from './facture.model';
import { Parasole } from './parasole.model';
import { ReservationParasole } from './reservation-parasole.model';
import { Statut } from './statut';
import { TypeEquipement } from './type-equipement';
import { User } from './user.model';

export class Reservation {
  id?: number;
  dateDebut?: string ;
  dateFin?: string ;
  remarque?: string;
  reservationParasoles?: ReservationParasole[];
  client?: User;
  statut?: Statut ;
  facture?: Facture;

  constructor(
    id?: number,
    dateDebut?: string,
    dateFin?: string,
    remarque?: string,
    reservationParasoles?: ReservationParasole[],
    client?: User,
    statut?: Statut,
    facture?: Facture
  ) {
    this.id = id;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
    this.remarque = remarque;
    this.reservationParasoles = reservationParasoles;
    this.client = client;
    this.statut = statut;
    this.facture = facture;
  }
}


