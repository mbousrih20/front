import { Equipement } from './equipement.model';
import { File } from './file.model';
import { ReservationParasole } from './reservation-parasole.model';

export class Parasole {
  id?: number;
  numEmplacement?: number;
  statut?: string;
  equipements?: Equipement[];
  file?: File;
  reservationParasoles?: ReservationParasole[];
  
  constructor(
    id?: number,
    numEmplacement?: number,
    statut?: string,
    equipements?: Equipement[],
    file?: File,
    reservationParasoles?: ReservationParasole[]
  ) {
    this.id = id;
    this.numEmplacement = numEmplacement;
    this.statut = statut;
    this.equipements = equipements;
    this.file = file;
    this.reservationParasoles = reservationParasoles;
  }
}