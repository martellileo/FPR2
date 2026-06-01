package br.edu.ifsp.pep.demo.repositorio;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import br.edu.ifsp.pep.demo.model.Curso;

public interface CursoRepositorio extends JpaRepository<Curso, Long> {

    Optional<Curso> findByNome(String nome);

    List<Curso> findByNomeLike(String nome);

    List<Curso> findByNomeContainsIgnoreCase(String nome);
}
