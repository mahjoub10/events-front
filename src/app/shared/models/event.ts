import { Attendee } from './attendee';

export class Event {
    id: number;
    name: string;
    start: Date;
    subject: string;
    speakerIds: number[];
    description: string;
    attendees: Attendee[];

}
