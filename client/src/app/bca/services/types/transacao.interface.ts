export interface Transacao {
  nroSequencialTransacao: string;
  codTransacao: string;
  codModalidadeProcessamento: string;
  codIdCliente: string;
  UfOrigemTransacao: string;
  ufOrigemTrasmissao: string;
  ufDestinoTrasmissao: string;
  tpCondicionalidadeTransacao: string;
  tamanhoTransacao: string;
  codRetornoTransacao: string;
  diaJuliano: string;
  corpo?: string;
}
