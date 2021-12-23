import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransacoesService {

  url = "http://localhost:3000/dashboard"

  constructor(private http: HttpClient) { }

  //listar todas as transações que estão armazenadas no banco de dados

  getTransacoes(){
    return this.http.get(this.url)
  }

  //get de uma única transação
  getUmaTransacao(id:any){
    return this.http.get(this.url + '/' + id)
  }

  //adicionar uma transacao
  addTransacao(transacao: Transacao){
    return this.http.post(this.url, transacao)
  }

  //modificar uma transacao
  editTransacao(id:any, transacao: Transacao) {
    return this.http.put(this.url + '/' + id, transacao)
  }

  deleteTransacao(id:any) {
    return this.http.delete(this.url + '/' + id)
  }

}

export interface Transacao {
  id_transferencia?: string
  nomeCliente?: string
  contaCliente?: string
  valorTransacao?: string

}


