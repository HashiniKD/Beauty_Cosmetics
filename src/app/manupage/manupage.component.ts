import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from '../order-details.service';


@Component({
  selector: 'app-manupage',
  templateUrl: './manupage.component.html',
  styleUrls: ['./manupage.component.css']
})
export class ManupageComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service:OrderDetailsService) { }
  getLipsticId:any;
  LipstickData:any;
  lipstick:any;

  ngOnInit(): void {
    this.lipstick = this.service.lipstick;
    this.getLipsticId = this.param.snapshot.paramMap.get('id');
    console.log(this.getLipsticId,'getlipstick');
    if(this.getLipsticId)
    {
        this.LipstickData = this.service.lipstick.filter((value)=>{
          
            return value.id == this.getLipsticId;
        })
        }
    }

}


