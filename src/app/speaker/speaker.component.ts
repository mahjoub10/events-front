import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-speaker',
    templateUrl: './speaker.component.html'
})
export class SpeakerComponent implements OnInit {


    // CONSTRUCTOR
    constructor() {}

    // ON INIT LIFE CYCLE
    ngOnInit() {
        console.log('Init speaker component');
    }

}
