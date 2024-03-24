import { Reservation } from './reservation.model';
import { Parasole } from './parasole.model';
import { TypeEquipement } from './type-equipement';

export class ReservationParasole {
  id : number;
  equipements?: TypeEquipement;
  reservation?: Reservation;
  parasole?: Parasole;

  constructor(id: number, equipements?: TypeEquipement,  reservation?: Reservation, parasole?: Parasole) {
    this.id = id;
    this.equipements = equipements
    this.reservation = reservation;
    this.parasole = parasole;
  }
}