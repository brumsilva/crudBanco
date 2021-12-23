import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransacoesService, Transacao } from 'src/service/transacoes.service';

@Component({
  selector: 'app-transacoes',
  templateUrl: './transacoes.component.html',
  styleUrls: ['./transacoes.component.sass']
})
export class TransacoesComponent implements OnInit {

  listarTransacoes: Transacao[]

  constructor( private TransacoesService: TransacoesService, private router: Router) {
    this.listarTransacoes = []
  }

  ngOnInit(): void {
    this.ListarTransacoes()
  }

  ListarTransacoes(){
    this.TransacoesService.getTransacoes().subscribe({
      next: (resultado) => {console.log(resultado)
      this.listarTransacoes = <any>resultado},
      error: (error) => console.error(error),
      complete: () => console.info('Tudo certo')
    })
  }

  editar(id:any){
    this.router.navigate(['edit/'+ id])
  }

  excluir(id:any){
    this.TransacoesService.deleteTransacao(id).subscribe({
      next: (resultado) =>{console.log("🗑️")
        this.ListarTransacoes()},
        error: (erro) => console.error(erro),
        complete: () => console.info ("👋🏻")
    })

  }

}
