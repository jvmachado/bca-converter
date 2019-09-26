import { Component, Input } from "@angular/core";
import { Transacao } from "../../services/types/transacao.interface";

@Component({
  selector: "app-transacao-formatada",
  templateUrl: "./transacao-formatada.component.html",
  styleUrls: ["./transacao-formatada.component.scss"]
})
export class TransacaoFormatadaComponent {
  @Input()
  transacaoConvertida: Transacao;

  constructor() {}
}
