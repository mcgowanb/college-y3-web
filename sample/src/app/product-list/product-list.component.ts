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
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImages: boolean = true;
  private _searchString: string;
  filteredProducts: IProduct[];

  products: IProduct[] = [
    {
      'productId': 2,
      'productName': "Garden Cart",
      'productCode': "GDN-0023",
      'releaseDate': "March 18, 2016",
      'description': "15 callon capacity rolling garden cart",
      'price': 32.99,
      'starRating': 4.2,
      'imageUrl': "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
      'productId': 5,
      'productName': "Hammer",
      'productCode': "TBX-0048",
      'releaseDate': "May 21, 2016",
      'description': "Curved steel claw hammer",
      'price': 8.99,
      'starRating': 4.8,
      'imageUrl': "http://openclipart.org/image/300px/svg_to_png/73/rejoin_Hammer.png"
    },
    {
      'productId': 2,
      'productName': "Snow Shovel",
      'productCode': "SHV-0091",
      'releaseDate': "March 18, 2017",
      'description': "Useful for shoveling snow when its snowey",
      'price': 24.99,
      'starRating': 4.9,
      'imageUrl': "https://openclipart.org/image/300px/svg_to_png/213328/cyberscooty-snow_shovel.png"
    },
    {
      'productId': 5,
      'productName': "Axe",
      'productCode': "AXE-0100",
      'releaseDate': "Jan 21, 2016",
      'description': "Steel and wood axe, for all your axing needs",
      'price': 12.99,
      'starRating': 3.8,
      'imageUrl': "https://openclipart.org/image/300px/svg_to_png/168599/Fireaxe.png"
    },
    {
      'productId': 2,
      'productName': "Lawn Mower",
      'productCode': "LWN-0147",
      'releaseDate': "March 18, 2016",
      'description': "Great for keeping your lawn mown",
      'price': 232.99,
      'starRating': 3.9,
      'imageUrl': "https://openclipart.org/image/300px/svg_to_png/284964/lawnmower.png"
    },
    {
      'productId': 5,
      'productName': "Watering Can",
      'productCode': "WAT-001",
      'releaseDate': "May 21, 2016",
      'description': "15 L Watering can for waterin stuff",
      'price': 8.99,
      'starRating': 4.8,
      'imageUrl': "https://openclipart.org/image/300px/svg_to_png/203249/watering-can.png"
    }
  ]

  constructor() {
  }

  get searchString() {
    return this._searchString;
  }

  set searchString(value) {
    this._searchString = value;
    this.filterList();
  }

  filterList() {
    this.filteredProducts = _.filter(this.products, (p: IProduct) => {
      return p.productName.toLocaleLowerCase().includes(this.searchString.toLocaleLowerCase());
    })
  }

  ngOnInit() {
    this.filteredProducts = this.products;
  }

}
