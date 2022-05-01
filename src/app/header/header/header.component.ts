import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../request.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  key:boolean = false
  
  constructor( public request: RequestService ) {}

  ngOnInit(): any{
    this.request.stream
    .subscribe( ()=>{
     this.key = !this.key
   })
  }
}

