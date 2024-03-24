
import { Concession } from "./Concession";
import { Pays } from "./pays.model";
import { Reservation } from "./reservation.model";
import { Role } from "./role.model";

export class User {
  id?: number;
  username?: string;
  nom?: string;
  prenom?: string;
  email?: string;
  password?: string;
  creationDate?: Date;
  token?: string;
  pays?: Pays ;
  reservations?: Reservation[] ;
  adresseDeFacturation?: string;
  historiqueDeTransaction?: string ;
  concession?: Concession ;
  phone?: number;
  tokenCreationDate?: Date ;
  roles?: Role[] ;

  constructor(
    id?: number,
    username?: string,
    email?: string,
    password?: string,
    nom?: string,
    prenom?: string,
    adresseDeFacturation?: string,
    phone?: number,
    pays?: Pays
  ) {
    this.id = id
    this.username = username;
    this.email = email;
    this.password = password;
    this.nom = nom || '';
    this.prenom = prenom || '';
    this.adresseDeFacturation = adresseDeFacturation || '';
    this.phone = phone || 0;
    this.pays =pays
  }
}

