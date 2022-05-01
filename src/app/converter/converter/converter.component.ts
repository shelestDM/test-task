import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request.service';

export interface Currency {
  id: number
  data: number
}

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})

export class ConverterComponent implements OnInit {

  key:boolean = false
  minValueKey:boolean = true
  firstCurrency: number | any = ''
  secondCurrency: number | any = ''
  selectedOptionOne = 0
  selectedOptionTwo = 2

  options = [
  { id: '0', name: 'USD' },
  { id: '1', name: 'EUR'  },
  { id: '2', name: 'UAH'  },
  { id: '3', name: 'PLN'  }
  ];


  constructor( public request: RequestService ) { }

  ngOnInit()  {
   this.request.stream
   .subscribe( ()=>{
    this.key = !this.key
   })
  }

 

  onAddGeneral ( generalCurrency:number | any , selectedOptionOne: number, selectedOptionTwo: number){
    if(generalCurrency === ''){
    }
    else if(generalCurrency <0 || generalCurrency ==0 )
    {
      this.minValueKey = false 
    }
    else if (generalCurrency>0)
    {
      this.minValueKey = true
      if(generalCurrency == this.firstCurrency){
        let result =
        (+generalCurrency)*this.request.currencysValues[this.options[selectedOptionOne].name]/this.request.currencysValues[this.options[selectedOptionTwo].name]
        this.secondCurrency = Math.trunc(result * 100) / 100;
      }
     
      else if(generalCurrency == this.secondCurrency){
        let result = 
        (+generalCurrency)*this.request.currencysValues[this.options[selectedOptionTwo].name]/this.request.currencysValues[this.options[selectedOptionOne].name]
        this.firstCurrency = Math.trunc(result * 100) / 100;
      }
     
    }  
  }
}

