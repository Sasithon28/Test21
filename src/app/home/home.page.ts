import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Productname',
    },
    {
      type: 'number',
      placeholder: 'Price',
      min: 1,
      max: 100,
    },
    {
      type: 'textarea',
      placeholder: 'this is the product description',
    },
  ];

  isActionSheetOpen = false;
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }

  constructor() {}

}
