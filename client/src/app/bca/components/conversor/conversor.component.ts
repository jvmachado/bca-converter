import { Component, OnInit } from "@angular/core";
import { BcaService } from "../../services/bca.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Transacao } from "../../services/types/transacao.interface";

@Component({
  selector: "app-conversor",
  templateUrl: "./conversor.component.html",
  styleUrls: ["./conversor.component.scss"]
})
export class ConversorComponent implements OnInit {
  searchForm: FormGroup;
  transacaoConvertida: Transacao;

  constructor(private service: BcaService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      transacao: [
        "",
        Validators.compose([Validators.required, Validators.minLength(37)])
      ]
    });
  }

  onSubmit() {
    const transacaoControl = this.searchForm.controls.transacao;
    if (transacaoControl.valid) {
      this.service.convert(transacaoControl.value).subscribe(data => {
        this.transacaoConvertida = data;
      });
    }
  }
}
