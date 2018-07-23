import { Attendee } from './attendee';
import { Speaker } from './speaker';

export class Event {
    id: number;
    name: string;
    start: Date;
    subject: string;
    speakers: Speaker[];
    description: string;
    attendees: Attendee[];

}
