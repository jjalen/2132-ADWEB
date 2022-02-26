import { Component, OnInit } from '@angular/core';
import { HttpclientService } from '../httpclient.service';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  pageTitle:string="Example HTTP Service";

  httpusers:any;
  anotherusers:any;
  constructor(private httpclientlist:HttpclientService) { }

  ngOnInit(): void {
    this.httpclientlist.getUsersfromServer().subscribe((data)=>{
      this.httpusers = data;
    });
    this.httpclientlist.getUsersfromServertwo().subscribe((data)=>{
      this.anotherusers = data;
    })
  }
}