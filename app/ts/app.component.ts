import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: '<h1>{{mainHeading}}</h1>'
})

export class AppComponent {
    mainHeading = "My Videos";
}
