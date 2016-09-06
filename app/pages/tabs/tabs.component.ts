import {Component} from '@angular/core'
import {HomePage} from '../home-page/home-page';
import {AboutPage} from '../about-page/about-page';
import {ContactPage} from '../contact-page/contact-page';

@Component({
  templateUrl: 'build/pages/tabs/tabs.component.html'
})
export class TabsComponent {

  private tabHome: any;
  private tabVote: any;
  private tabAbout: any;

  constructor() {
    // this tells the tabs component which Pages should be each tab's root Page
    this.tabHome = HomePage;
    this.tabVote = ContactPage;
    this.tabAbout = AboutPage;
  }
}
