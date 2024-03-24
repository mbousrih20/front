
import { Concession } from './Concession';
import { Parasole } from './parasole.model';

export class File {
  id?: number | undefined;
  numero?: number | undefined;
  prixJournalier?: number | undefined;
  parasoles?: Parasole[] ;
  concession?: Concession | undefined;

}