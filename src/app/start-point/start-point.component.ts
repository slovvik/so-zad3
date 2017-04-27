import { Component } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'start-point',
  templateUrl: './start-point.component.html',
  styleUrls: ['./start-point.component.css'],
  providers: [HttpService]
})
export class StartPointComponent {

  getHello: any;
  algorithmData: any;
  showAlgorithms: boolean;

  constructor(private httpService: HttpService) {
    this.showAlgorithms = true;
  }

  getHelloData() {
    this.httpService.getHello().subscribe(
      (data: any) => this.getHello = data.name
    );
  }

  getAlgorithmData(virtualMemory: string, physicalMemory: string, stringReference: string) {
    this.httpService.getAlgorithmData(virtualMemory, physicalMemory, stringReference).subscribe(
      (data: any) => this.algorithmData = JSON.stringify(data)
    );
    this.showAlgorithms = false;
  }


}
