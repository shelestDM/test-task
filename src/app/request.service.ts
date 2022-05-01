import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  
export class RequestService implements OnInit {
  rates: any = {} 
  currencys: Array<any> = ['USD', 'EUR', 'UAH', 'PLN' ]
  currencysValues: any = {}
  stream: Observable<any>


  constructor(public http: HttpClient) {}
  ngOnInit(){}


  requestData() {
      this.http.get<any>('https://cdn.cur.su/api/nbu.json')
      .subscribe(response => {
        this.rates = response.rates
        for(let [key, value] of Object.entries(this.rates)){
          if(this.currencys.includes(key)){
              this.currencysValues[key] = this.rates.UAH / Number(value)
            }
          }
        }
      )
    }
    onLoadData(){
      this.stream =  new Observable <any> ((observer)=>{
        this.requestData()
        observer.next()
       }
      )
    }
  }
 