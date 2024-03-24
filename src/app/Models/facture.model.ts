import { Reservation } from './reservation.model';

export class Facture {

  id: number | undefined;
  montant: number | undefined;
  reservation: Reservation | undefined;

}