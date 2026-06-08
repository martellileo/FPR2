package br.edu.ifsp.pep.dto;

import java.math.BigDecimal;

import br.edu.ifsp.pep.backend_crud.model.Status;

public record ProdutoDTO(
    String descricao, 
    BigDecimal preco,
    int quantidade,
    Status status
) {
}
