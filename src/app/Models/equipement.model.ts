import { Parasole } from './parasole.model';

import { Reservation } from './reservation.model';
import { TypeEquipement } from './type-equipement';

export class Equipement {
  id: number | undefined;
  numEquipement: number | undefined;
  statutEquipement: string | undefined;
  typeEquipement: TypeEquipement | undefined;
  reservations: Reservation[] | undefined;

}