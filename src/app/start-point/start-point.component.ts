import { Component } from '@angular/core';
import { HttpService } from "../http.service";
import {Response, URLSearchParams} from "@angular/http";

@Component({
  selector: 'start-point',
  templateUrl: './start-point.component.html',
  styleUrls: ['./start-point.component.css'],
  providers: [HttpService]
})
export class StartPointComponent {

  getHello: any;
  algorithmData: any;

  constructor(private httpService: HttpService) { }

  getHelloData() {
    this.httpService.getHello().subscribe(
      (data: any) => this.getHello = data.name
    );
  }

  getAlgorithmData() {
    this.httpService.getAlgorithmData().subscribe(
      (data: any) => this.algorithmData = data
    );
  }


}
