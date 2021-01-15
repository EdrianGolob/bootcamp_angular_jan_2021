/*
    Dado um retorno da api, crie funções para as seguintes situações:

    Média de preço do pedido
    Nome do produto mais barato
    filtro por código do produto
    busca de produto por nome
*/

import { FiltrarProdutoPorNome, mediaPreco, menorPreco } from "./exemplos/exercicio";
import { FiltrarProdutoPorCodigo } from "./exemplos/exercicio";


  const api = {
    numeroPedido: '0001',
    cliente: 'Alvaro',
    items: [
      { produto: '0001', descricao: 'XBOX', preco: 5000 },
      { produto: '0002', descricao: 'PS5', preco: 5500 },
      { produto: '0003', descricao: 'PC', preco: 10000 },
      { produto: '0004', descricao: 'SWITCH', preco: 1000 },
      { produto: '0005', descricao: 'ATARI', preco: 500 },
    ],
  };

  const mediaPrecoItem =   mediaPreco(api.items);
  console.log('Média de preço do pedido')
  console.log(mediaPrecoItem);

  const menorItem = menorPreco(api.items);
  console.log('Nome do produto mais barato')
  console.log(menorItem);

  
  const produtoFiltradoPorCodigo = FiltrarProdutoPorCodigo(api.items,'0002')
  console.log('filtro por código do produto')
  console.log(produtoFiltradoPorCodigo);

  const produtoFiltrado = FiltrarProdutoPorNome(api.items,'XBOX');
  console.log('busca de produto por nome')
  console.log(produtoFiltrado);

 


  

  

