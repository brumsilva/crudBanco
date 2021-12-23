import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TransacoesService, Transacao } from 'src/service/transacoes.service';

@Component({
  selector: 'app-transacoes-form',
  templateUrl: './transacoes-form.component.html',
  styleUrls: ['./transacoes-form.component.sass']
})
export class TransacoesFormComponent implements OnInit {

  verificarStatus: boolean = true

  form!: FormGroup

  Transacao: Transacao = {
    id_transferencia: '',
    nomeCliente: '',
    contaCliente: '',
    valorTransacao: '',
  }

  constructor(
    private router: Router,
    private service: TransacoesService,
    private ActiveRoute: ActivatedRoute,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    const id_url = <any>this.ActiveRoute.snapshot.params['id']
    console.log('id do URL:' + id_url)
    this.service.getUmaTransacao(id_url).subscribe({
      next: (resultado) => {
                              console.log(resultado),
                              this.Transacao = <any>resultado,
                              this.updateForm(this.Transacao)
                              this.verificarStatus = false
      },
      error: (err) => { console.log(err)},
      complete: () => console.info('Livro Encontrado')
    })

    this.form = this.fb.group({
      id_transferencia: [null],
      nomeCliente: [null],
      contaCliente: [null],
      valorTransacao: [null],
    })
  }

  // adicionar() {
  //   this.service.addTransacao(this.Transacao).subscribe({
  //     next: (resultado) => { console.log('cadastro realizado com sucesso')
  //     },
  //     error:(erro) => console.log(erro),
  //     complete: () => {console.log('completo')}
  //   })

  //   this.router.navigate(['/home'])
  // }

  modificar(){
    if(this.form.value.id_transferencia){
      //vamos editar o form-livros
      this.service.editTransacao(this.form.value.id_transferencia, this.form.value).subscribe({
        next: (resultado) => console.log('Livro Editado com Sucesso'),
        error: (err) => console.error(err),
        complete: () => {console.info('Edição Completada com êxito'), this.router.navigate(['/home']) }
      })
    } else {
      //vamos cadastrar o form-livros
      this.service.addTransacao(this.form.value).subscribe({
        next: (resultado) => console.log('Livro Cadastrado com Sucesso'),
        error: (err) => console.error(err),
        complete: () => {console.info('Cadastrado Completado com êxito'), this.router.navigate(['/home']) }
      })
    }
  }

  updateForm(Transacao:any){
    this.form.patchValue({
      id_transferencia:Transacao.id_transferencia,
      nomeCliente: Transacao.nomeCliente,
      contaCliente: Transacao.contaCliente,
      valorTransacao: Transacao.valorTransacao
    })
  }

}
