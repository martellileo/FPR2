package br.edu.ifsp.pep.backend_crud.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifsp.pep.backend_crud.model.Produto;
import br.edu.ifsp.pep.backend_crud.repositorio.ProdutoRepositorio;
import br.edu.ifsp.pep.dto.ProdutoDTO;
import jakarta.validation.Valid;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;


@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    private ProdutoRepositorio produtoRepositorio;

    public ProdutoController(ProdutoRepositorio produtoRepositorio) {
        this.produtoRepositorio = produtoRepositorio;
    }

    //* http://localhost:3000/produtos
    @GetMapping
    public List<Produto> buscarTodos() {
        return produtoRepositorio.findAll();
    }

     //* Get http://localhost:3000/produtos/1
    @GetMapping("/{id}")
    public ResponseEntity<Produto> obterPeloId(@PathVariable("id") Long identificador) {
        return produtoRepositorio.findById(identificador)
        .map(produto -> ResponseEntity.ok().body(produto))
        .orElse(ResponseEntity.notFound().build());
    }  
    
    //* Post http://localhost:3000/cursos
    @PostMapping()
    @ResponseStatus(code = HttpStatus.CREATED) //* 201
    public Produto inserir(@Valid @RequestBody ProdutoDTO produtoDTO){
        Produto produto = new Produto();
        produto.setDescricao(produtoDTO.descricao());
        produto.setPreco(produtoDTO.preco());
        produto.setQuantidade(produtoDTO.quantidade());
        produto.setStatus(produtoDTO.status());
        return produtoRepositorio.save(produto);
    }

    //! Delete http://localhost:3000/produtos/1
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> excluir(@PathVariable Long id){
        System.out.println("Id: " + id);
        
        return produtoRepositorio.findById(id)
        .map( curso -> {
            produtoRepositorio.deleteById(id);
            return ResponseEntity.noContent().<Void>build(); // 204
        })
        .orElse(ResponseEntity.notFound().build()); // 404
    }

    //? Put http://localhost:3000/produtos/1
    @PutMapping("/{id}")
    public ResponseEntity<Produto> alterar(@PathVariable Long id, @RequestBody ProdutoDTO produtoDTO){
        return produtoRepositorio.findById(id)
        .map( produto -> {
            produto.setDescricao(produtoDTO.descricao());
            produto.setPreco(produtoDTO.preco());
            produto.setQuantidade(produtoDTO.quantidade());
            produto.setStatus(produtoDTO.status());
            return ResponseEntity.ok(produtoRepositorio.save(produto));
        })
        .orElse(ResponseEntity.notFound().build());
    }

    //* Get http://localhost:3000/produtos/busca/like?nome=Spring
    @GetMapping("/busca/like")
    public ResponseEntity<List<Produto>> searchByDescricaoLike(
            @RequestParam(name = "descricao", required = true) String descricao
    ){
        List<Produto> produtos = produtoRepositorio.findByDescricaoLike("%"+descricao+"%");
        return ResponseEntity.ok().body(produtos);
    }

    //* Get http://localhost:8081/produtos/busca/contains?nome=Spring
    @GetMapping("/busca/contains")
    public ResponseEntity<List<Produto>> searchByDescricaoContains(
            @RequestParam(name = "descricao", required = true) String descricao
    ){
        List<Produto> produtos = produtoRepositorio.findByDescricaoIgnoreCase(descricao);
        return ResponseEntity.ok().body(produtos);
    }
}
