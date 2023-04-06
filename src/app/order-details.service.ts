import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  itamdetails=[
    {
      id:1,
      itemName:"Qutex",
      itemDetails:"water clenser",
      itemPrice:"Rs:1000/=",
      itemImage:"assets/image/q2.jpg"
    },
    {
      id:2,
      itemName:"Lipstick",
      itemDetails:"water clenser",
      itemPrice:"Rs:1000/=",
      itemImage:"assets/image/l1.jpg"
    },
    {
      id:3,
      itemName:"Brashes",
      itemDetails:"water clenser",
      itemPrice:"Rs:1000/=",
      itemImage:"assets/image/re.jpg"
    },
    {
      id:4,
      itemName:"Qutex",
      itemDetails:"water clenser",
      itemPrice:"Rs:1000/=",
      itemImage:"assets/image/q5.jpg"
    }
  ]

  itemtype = [
    {
      id:1,
      typeName:"Skin Care",
      typeImage:"assets/image/sc.jpg"
    },
    {
      id:2,
      typeName:"Lipstick",
      typeImage:"assets/image/l5.jpg"
    },
    {
      id:3,
      typeName:"Brushers",
      typeImage:"assets/image/b4.jpg"
    },
    {
      id:4,
      typeName:"Makeup",
      typeImage:"assets/image/mm.jpg"
    }
  ]

  lipstick = [
    {
      id:1,
      lipName:"Liquid Lipstick",
      lipPrice:"Rs 1000/=",
      lipImage:"assets/image/lml1.jpg"
    },
    {
      id:2,
      lipName:"Liquid Lipstick",
      lipPrice:"Rs 1000/=",
      lipImage:"assets/image/lml4.png"
    },
    {
      id:3,
      lipName:"Liquid Lipstick",
      lipPrice:"Rs 1000/=",
      lipImage:"assets/image/lml2.jpg"
    },
    {
      id:4,
      lipName:"Liquid Lipstick",
      lipPrice:"Rs 1000/=",
      lipImage:"assets/image/pl1.jpg"
    },
    {
      id:5,
      lipName:"Liquid Lipstick",
      lipPrice:"Rs 1000/=",
      lipImage:"assets/image/pl3.jpg"
    },
    {
      id:6,
      lipName:"Liquid Lipstick",
      lipPrice:"Rs 1000/=",
      lipImage:"assets/image/pl4.jpg"
    },
    {
      id:7,
      lipName:"Liquid Lipstick",
      lipPrice:"Rs 1000/=",
      lipImage:"assets/image/cl.jpg"
    },
    {
      id:8,
      lipName:"Liquid Lipstick",
      lipPrice:"Rs 1000/=",
      lipImage:"assets/image/cl4.jpg"
    },
    {
      id:7,
      lipName:"Liquid Lipstick",
      lipPrice:"Rs 1000/=",
      lipImage:"assets/image/cl7.jpg"
    }
  ]

}
