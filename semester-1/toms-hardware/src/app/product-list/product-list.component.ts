import { log } from 'util';
import { DataService } from '../../providers/data.service';
import { forEach } from '@angular/router/src/utils/collection';
import { IProduct } from './IProduct';
import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: string = "Joe's Harware Spot";
  private _showImages: boolean = true;
  private _searchString: string;
  filteredProducts: IProduct[];
  products: IProduct[];
  buttonTitle: string = "Hide"

  constructor(private _dataService: DataService) {
    this.products = this.filteredProducts = [];

  }

  get searchString() {
    return this._searchString;
  }

  set searchString(value) {
    this._searchString = value;
    if (this._searchString.length == 0)
      this.loadAllItems();
    else this.filterItems(value);
  }


  filterItems(query: string) {
    this._dataService.searchProducts(query).subscribe((results: IProduct[]) => {
      this.products = this.filteredProducts = results;
    })
  }

  loadAllItems() {
    this._dataService.getProductsList().subscribe((results: IProduct[]) => {
      this.products = this.filteredProducts = results;
    });
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

  ngOnInit() {
    this.loadAllItems();
  }

  ratingClick(message: string) {
    console.log(message)
  }

}
