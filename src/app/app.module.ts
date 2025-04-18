import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './Comp/menu/menu.component';
import { RodapeComponent } from './Comp/rodape/rodape.component';
import { PainelPrincipalComponent } from './Comp/painel-principal/painel-principal.component';
import { CadastroProdutosComponent } from './Comp/cadastro-produtos/cadastro-produtos.component';

import { FormsModule } from '@angular/forms'; // Import FormsModule

import { HttpClient, HttpClientModule } from '@angular/common/http'; // Importa o HttpClientModule para fazer requisições HTTP

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    PainelPrincipalComponent,
    CadastroProdutosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
