export interface Produto{
    produto?: string;
    descricao?: string;
    preco?: number;
}

export interface Pedido{
    numeroPedido?: string;
    cliente?: number;
    items?: Produtos;
}

export type Produtos = Array<Produto>;

export function FiltrarProdutoPorNome(filtro: Produtos, descricao?:string){
    return filtro.filter((item) => item.descricao === descricao);
 
}

export function FiltrarProdutoPorCodigo(filtro: Produtos, produto?:string){
    return filtro.filter((item) => item.produto === produto); 
}

export function mediaPreco(mediaItems: Produtos) { 

    let mediaPreco = mediaItems.reduce((soma, produto) => soma + produto.preco ,0) / (mediaItems.length)
    return mediaPreco;
}


export function menorPreco(item: Produtos){
    const menorItem = item;
    const menor = menorItem.reduce(
        (orig, busca) => orig.preco < busca.preco ? orig : busca
      )
      return(menor.descricao);
}



