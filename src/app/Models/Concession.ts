import { User } from "./user.model";

export class Concession {
  id?:number ;
    name?: string;
    localisation?: string;
    files?: File[];
    concessionnaire?: User ;
  
    constructor(id?:number ,name?: string, localisation?: string , files?: File[] , concessionnaire?: User) {
      this.id = id;
      this.name = name;
      this.localisation = localisation;
      this.files = files ;
      this.concessionnaire = concessionnaire;
    }
  }