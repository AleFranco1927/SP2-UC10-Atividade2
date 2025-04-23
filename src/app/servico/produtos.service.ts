import { HttpClient } from '@angular/common/http'; // Importa o HttpClient para fazer requisições HTTP
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
// Removed duplicate import of ProdutoService
/* injectable proporciona que o  service pode ser usado em qual quer lugar*/

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private apiUrl = 'http://localhost:3000/produtos'; // URL da API de produtos

  constructor(private http: HttpClient) { }
  // Inicializa o serviço e pode fazer requisições HTTP video 49m42s
  obterProdutos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl) // ok Retorna um Observable com a lista de produtos
  }
  obtendoProdutosPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`) // ok Retorna um Observable com o produto correspondente ao ID
  }
  atualizarProduto(id: number, produto: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, produto) // ok Retorna um Observable com o produto atualizado
  }
  editarProduto(id: number, produto: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${produto.id}`, produto) // Retorna um Observable com o produto editado
  }
  adicionarProduto(produto: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, produto) // ok Retorna um Observable com o produto adicionado
  }
  deletarProduto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`) // Retorna um Observable com o produto excluído
  }
  obterUltimoId(): Observable<number> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((produtos: any[]) => produtos.length > 0 ? Math.max(...produtos.map(p => p.id)) : 0)
    ); // Retorna o último ID dos produtos cadastrados
  }
}

