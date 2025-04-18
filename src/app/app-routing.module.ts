import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PainelPrincipalComponent } from './Comp/painel-principal/painel-principal.component'; // Importa o componente PainelPrincipalComponent
import { CadastroProdutosComponent } from './Comp/cadastro-produtos/cadastro-produtos.component'; // Importa o componente CadastroProdutosComponent

const routes: Routes = [
  {
    path: '',
    redirectTo: 'painel-principal',
    pathMatch: 'full' // Redireciona para /painel-principal ao acessar a raiz
  },
  {
    path: 'painel-principal',
    component: PainelPrincipalComponent // Componente que será exibido na rota /painel-principal
  },
  {
    path: 'cadastro-produtos',
    component: CadastroProdutosComponent // Componente que será exibido na rota /cadastro-produtos
  },

  {
    path: 'editar-produtos/:id',
    // Rota para editar um produto, onde :id é um parâmetro de rota
    component: CadastroProdutosComponent // Componente que será exibido na rota /cadastro-produtos
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
