import { Component } from '@angular/core';
import { ProdutoService } from '../../servico/produtos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-painel-principal',
  standalone: false,
  templateUrl: './painel-principal.component.html',
  styleUrls: ['./painel-principal.component.css']
})
export class PainelPrincipalComponent {
/*@Component({
  selector: 'app-painel-principal',
  standalone: false,
  templateUrl: './painel-principal.component.html',
  styleUrl: './painel-principal.component.css'
})
export class PainelPrincipalComponent {*/

  produtos: any = [] // Array para armazenar os produtos obtidos do serviço

  constructor(private ProdutoService: ProdutoService, private router: Router) { } // Construtor do componente, onde o serviço ProdutosService e o Router são injetados
  
  ngOnInit(): void {
    this.listarProdutos() // Chama o método listarProdutos ao inicializar o componente
  }// Método chamado ao inicializar o componente
  listarProdutos() {
    this.ProdutoService.obterProdutos().subscribe(dados => {
      this.produtos = dados // Armazena os produtos obtidos na variável produtos
    })// Método para listar os produtos
  } // Método para navegar para a página de cadastro de produtos
  
  editarProduto(id: number) {
    this.router.navigate(['editar-produtos', id]) // Navega para a rota /cadastro-produtos com o ID do produto
  }

  // Método para excluir um produto pelo ID se o usuário confirmar a ação
  Exclusao(id: number) {
    if (confirm('Tem certeza que deseja excluir este produto?')) { // Exibe um alerta de confirmação
      this.ProdutoService.deletarProduto(id).subscribe(() => { 
        alert('Produto excluído com sucesso!') // Exibe um alerta de sucesso
        this.listarProdutos() // Atualiza a lista de produtos após a exclusão
  }) 
  } // Método para navegar para a página de cadastro de produtos

}

  cadastrarProduto() {
    this.router.navigate(['/cadastro-produtos']) // Navega para a rota /cadastro-produtos
  } // Método para excluir um produto pelo ID
}