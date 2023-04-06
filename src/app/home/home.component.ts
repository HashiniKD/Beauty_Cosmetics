import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }

  itemData:any;
  itemType:any;



  ngOnInit(): void {
    this.itemData = this.service.itamdetails;
    this.itemType = this.service.itemtype;
  }

}
