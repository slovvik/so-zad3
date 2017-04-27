import {Injectable} from '@angular/core';
import {Http, Response, URLSearchParams} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  getHello() {
    return this.http.get('http://localhost:8080')
      .map((response: Response) => response.json());
  }

  getAlgorithmData(virtualMemory: string, physicalMemory: string, stringReference: string) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('virtualMemory', virtualMemory);
    params.set('physicalMemory', physicalMemory);
    params.set('stringReference', stringReference);
    return this.http.get('http://localhost:8080/algorithm/fifo', { search: params})
      .map((response: Response) => response.json());
  }
}
