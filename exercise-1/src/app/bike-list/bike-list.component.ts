import { log } from 'util';
import { IBike } from './IBike';
import { DataService } from '../../providers/data.service';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {

  pageTitle: string = "Joe's Bike Shop";
  private _showImages: boolean = true;
  private _showMens: boolean;
  private _showWomen: boolean;
  private _showKids: boolean;
  filteredBikes: IBike[];
  bikes: IBike[];
  buttonTitle: string = "Hide"

  constructor(private _dataService: DataService) {
    this.bikes = this.filteredBikes = [];
    this._dataService.getBikeList().subscribe(results => {
      this.bikes = results;
    });
  }


  public get showMens(): boolean {
    return this._showMens;
  }

  public set showMens(value: boolean) {
    this._showMens = value;
    this.filterList("mens", value);
  }

  public get showWomen(): boolean {
    return this._showWomen;
  }

  public set showWomen(value: boolean) {
    this._showWomen = value;
    this.filterList("womens", value);
  }

  public get showKids(): boolean {
    return this._showKids;
  }

  public set showKids(value: boolean) {
    this._showKids = value;
    this.filterList("kids", value);
  }


  get showImages() {
    return this._showImages;
  }

  set showImages(value) {
    this._showImages = value;
    this.flipButtonTitle();
  }

  flipButtonTitle() {
    if (this._showImages)
      this.buttonTitle = "Hide";
    else this.buttonTitle = "Show";
  }

  filterList(type: string, add: boolean) {
    if (add) {
      this.bikes.forEach((bike: IBike) => {
        if (bike.category.toLowerCase() == type.toLowerCase())
          this.filteredBikes.push(bike);
      });
    }
    else {
      this.filteredBikes = _.filter(this.filteredBikes, (bike: IBike) => {
        return bike.category.toLocaleLowerCase() != type.toLocaleLowerCase();
      });
    }

  }
  ngOnInit() {
  }

}
