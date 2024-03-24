import { User } from './user.model';
import { LienParente } from './lien-parente.model';
import { Pays } from './pays.model';
import { Reservation } from './reservation.model';


export class Client  {
  username: string | undefined;
  Nom: string | undefined;
  Prenom : string | undefined;
  email: string | undefined;
  Password: string | undefined;
  AdresseDeFacturation: string | undefined;
  Phone: number | undefined;
  PaysId : number |undefined;
  role : string[] |undefined;
}