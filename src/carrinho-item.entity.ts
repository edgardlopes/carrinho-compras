import { Produto } from "./produto.entity";

export type CarrinhoItem = {
  produto: Produto;
  quantidade: number;
};
