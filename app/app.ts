import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsComponent} from './pages/tabs/tabs.component';
import {VotingService} from './classes/voting.service';

@Component({
  templateUrl: 'build/app.component.html',
  providers: [
        VotingService
    ]
})
export class AppComponent {

  private rootPage:any;

  constructor(private platform:Platform) {
    this.rootPage = TabsComponent;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(AppComponent)
