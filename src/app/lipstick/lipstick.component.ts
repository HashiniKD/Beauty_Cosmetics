import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../order-details.service';

@Component({
  selector: 'app-lipstick',
  templateUrl: './lipstick.component.html',
  styleUrls: ['./lipstick.component.css']
})
export class LipstickComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }

  lipstick:any;

  ngOnInit(): void {

    this.lipstick = this.service.lipstick;

  }

}
