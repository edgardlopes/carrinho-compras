import { useState } from "react";
import { CarrinhoItem } from "./carrinho-item.entity";
import { Produto } from "./produto.entity";

export const useApp = () => {
  const [itemsCarrinho, setItemsCarrinho] = useState<CarrinhoItem[]>([]);

  const adicionarProduto = (produto: Produto) => {
    const novaLista = [...itemsCarrinho];

    const item = itemsCarrinho.find((item) => item.produto.id === produto.id);
    const index = itemsCarrinho.findIndex(
      (item) => item.produto.id === produto.id
    );
    if (item) {
      novaLista.splice(index, 1, {
        ...item,
        quantidade: item.quantidade + 1,
      });
    } else {
      novaLista.push({ produto, quantidade: 1 });
    }

    setItemsCarrinho(novaLista);
  };

  const removerProduto = (produto: Produto) => {
    const novaLista = [...itemsCarrinho];

    const item = itemsCarrinho.find((item) => item.produto.id === produto.id);
    const index = itemsCarrinho.findIndex(
      (item) => item.produto.id === produto.id
    );
    if (item && item.quantidade > 1) {
      novaLista.splice(index, 1, {
        ...item,
        quantidade: item.quantidade - 1,
      });
    } else {
      novaLista.splice(index, 1);
    }

    setItemsCarrinho(novaLista);
  };

  return { itemsCarrinho, adicionarProduto, removerProduto };
};
