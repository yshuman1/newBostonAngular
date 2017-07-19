import {Component} from 'angular2/core';
import {config} from './config.service'; //imported file where we store variables
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlaylistComponent]
})


export class AppComponent {
    mainHeading = config.MAIN_HEADING;
    videos:Array<Video>;

    constructor() {
        this.videos = [
            new Video(1, "Installing Django", "qgGIqRFvFFk", "How to Install Django"),
            new Video(1, "Surviving the Wilderness", "82ITMruGDG8", "Bucky goes hiking."),

        ]

    }
}
