import { Client } from './client.model';
import { User } from './user.model';

export class LienParente {
  Id?: number;
  TypeDeparente?: string;
  Client?: User;
  Concession? : User ;

  constructor(id?: number, nom?: string, client?: User,concession? : User) {
    this.Id = id;
    this.TypeDeparente = nom;
    this.Client = client;
    this.Concession = concession ;
  }
}