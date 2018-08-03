import { Attendee } from './attendee';
import { Speaker } from './speaker';
import { Organizer } from './organizer';
import { Request } from './request';

export class Event {
    id: number;
    name: string;
    start: Date;
    subject: string;
    speakers: Speaker[];
    description: string;
    attendees: Attendee[];
    organizer: Organizer;
    requests: Request[];

}
