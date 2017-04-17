import {Injectable} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  getHello() {
    return this.http.get('http://localhost:8080')
      .map((response: Response) => response.json());
  }

  getAlgorithmData() {
    let params: URLSearchParams = new URLSearchParams();
    params.set('virtualMemory', '1');
    params.set('physicalMemory', '2');
    params.set('stringReference', '3');
    return this.http.get('http://localhost:8080/algorithm/fifo', { search: params})
      .map((response: Response) => response.json());
  }
}
