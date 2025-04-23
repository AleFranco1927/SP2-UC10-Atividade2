import { Component, numberAttribute } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoService } from '../../servico/produtos.service';

@Component({
  selector: 'app-cadastro-produtos',
  standalone: false,
  templateUrl: './cadastro-produtos.component.html',
  styleUrl: './cadastro-produtos.component.css'
})
export class CadastroProdutosComponent {
  DdProduto: any = {
    produto: '',
    descricao: '',
    foto: '',
    preco: null,
  }

  constructor(

    private PService: ProdutoService,
    private ActRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    const id = this.ActRoute.snapshot.paramMap.get('id');
    if (id) {
      this.PService.obtendoProdutosPorId(Number(id)).subscribe(dados => {
        this.DdProduto = dados;
      });
    }
  }
// salvar produto video 1h 25m
  salvarProduto(): void { 
    if (this.DdProduto.id) {
      this.PService.atualizarProduto(this.DdProduto.id, this.DdProduto).subscribe(() => {
        alert('Produto atualizado com sucesso!');
        this.router.navigate(['/painel-principal']);
      });
    } else {
        this.PService.obterUltimoId().subscribe((ultimoId: number) => {
        this.DdProduto.id = (ultimoId + 1).toString();
        this.PService.adicionarProduto(this.DdProduto).subscribe(() => {
          alert('Produto cadastrado com sucesso!');
          this.router.navigate(['/painel-principal']);
        });
      });
    };
      
      // this.PService.adicionarProduto(this.DdProduto).subscribe(() => {
      //   alert('Produto cadastrado com sucesso!');
      //   this.router.navigate(['/painel-principal']);

      // copleta sem ""
      // this.PService.obterUltimoId().subscribe((ultimoId: number) => {
      //   this.DdProduto.id = ultimoId + 1;
      //   this.PService.adicionarProduto(this.DdProduto).subscribe(() => {
      //     alert('Produto cadastrado com sucesso!');
      //     this.router.navigate(['/painel-principal']);


    }

  }
