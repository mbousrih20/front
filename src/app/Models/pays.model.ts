import { Client } from './client.model';

export class Pays {
  id?: number;
  code?: string;
  nom?: string;
  clients?: Client[];

  constructor(id?: number, code?: string, nom?: string, clients?: Client[]) {
    this.id = id;
    this.code = code;
    this.nom = nom;
    this.clients = clients;
  }
}