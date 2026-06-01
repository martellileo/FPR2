package br.edu.ifsp.pep.demo.controller;

import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifsp.pep.demo.model.Curso;
import br.edu.ifsp.pep.demo.repositorio.CursoRepositorio;
import br.edu.ifsp.pep.dto.CursoDTO;

@RestController
@RequestMapping("/cursos")
public class CursoController {

    private CursoRepositorio cursoRepositorio;

    public CursoController(CursoRepositorio cursoRepositorio) {
        this.cursoRepositorio = cursoRepositorio;
    }

    //* Get http://localhost:3000/cursos
    @GetMapping
    public List<Curso> buscarTodos() {
        return cursoRepositorio.findAll();
    }

    //* Get http://localhost:3000/cursos/1
    @GetMapping("/{id}")
    public ResponseEntity<Curso> obterPeloId(@PathVariable("id") Long identificador) {
        return cursoRepositorio.findById(identificador)
        .map(curso -> ResponseEntity.ok().body(curso))
        .orElse(ResponseEntity.notFound().build());
    }

    //* Post http://localhost:3000/cursos
    @PostMapping()
    @ResponseStatus(code = HttpStatus.CREATED) //* 201
    public Curso inserir(@RequestBody CursoDTO cursoDTO){
        Curso curso = new Curso();
        curso.setNome(cursoDTO.nome());
        return cursoRepositorio.save(curso);
    }

    //! Delete http://localhost:3000/cursos/1
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id){
        System.out.println("Id: " + id);
        
        return cursoRepositorio.findById(id)
        .map( curso -> {
            cursoRepositorio.deleteById(id);
            return ResponseEntity.noContent().<Void>build(); // 204
        })
        .orElse(ResponseEntity.notFound().build()); // 404
    }

    //? Put http://localhost:3000/cursos/1
    @PutMapping("/{id}")
    public Curso alterar(@PathVariable Long id){
        return null;
    }

    //* Get http://localhost:3000/cursos/busca/like?nome=Spring
    @GetMapping("/busca/like")
    public ResponseEntity<List<Curso>> searchByNameLike(
            @RequestParam(name = "nome", required = true) String nome
    ){
        List<Curso> cursos = cursoRepositorio.findByNomeLike("%"+nome+"%");
        return ResponseEntity.ok().body(cursos);
    }

    //* Get http://localhost:8081/cursos/busca/contains?nome=Spring
    @GetMapping("/busca/contains")
    public ResponseEntity<List<Curso>> searchByNamoContains(
            @RequestParam(name = "nome", required = true) String nome
    ){
        List<Curso> cursos = cursoRepositorio.findByNomeContainsIgnoreCase(nome);
        return ResponseEntity.ok().body(cursos);
    }
}
