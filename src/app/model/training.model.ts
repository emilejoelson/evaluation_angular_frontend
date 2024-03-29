import { Member } from "./member.model";

export interface Training {
    id: number;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    members?: Member[];
  }
  