import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

interface contact { name: string;}

/**
 * @title Basic select
 */
@Component({
  selector: 'angular-material.component',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AngularMaterialComponent implements OnInit {
  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' }
  ];

  filterOptions: {
    value: string,
    selected: boolean
  }[] = [{
    value: 'filter1',
    selected: false
  }, {
    value: 'filter2',
    selected: false
  }, {
    value: 'filter3',
    selected: false
  },
  ];


  public person: contact;
  ngOnInit() {
    var atest = this.foods;
    console.debug(atest.length);
  }

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/flashcards.svg'));
  }

  onclick() {
    this.person = {
      name: 'Felipe'
    }
  }

}
