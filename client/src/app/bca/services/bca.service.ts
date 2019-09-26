import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Transacao } from "./types/transacao.interface";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BcaService {
  constructor(private http: HttpClient) {}

  convert(transacao: string): Observable<Transacao> {
    return this.http.post<Transacao>("/api/converter", {
      transacao: transacao
    });
  }
}
