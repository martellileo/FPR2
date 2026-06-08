package br.edu.ifsp.pep.backend_crud.repositorio;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ifsp.pep.backend_crud.model.Produto;
import java.util.List;


public interface ProdutoRepositorio extends JpaRepository<Produto, Long> {
    Optional<Produto> findByDescricao(String descricao);
    
    List<Produto> findByDescricaoLike(String descricao);

    List<Produto> findByDescricaoIgnoreCase(String descricao);
}
