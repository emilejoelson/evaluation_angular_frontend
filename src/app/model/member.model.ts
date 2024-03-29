import { Training } from "./training.model";

export interface Member {
    id: number;
    firstname: string;
    lastname: string;
    training: Training | null;
  }
  