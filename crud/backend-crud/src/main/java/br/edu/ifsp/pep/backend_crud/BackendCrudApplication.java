package br.edu.ifsp.pep.backend_crud;

import java.math.BigDecimal;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import br.edu.ifsp.pep.backend_crud.model.Produto;
import br.edu.ifsp.pep.backend_crud.model.Status;
import br.edu.ifsp.pep.backend_crud.repositorio.ProdutoRepositorio;

@SpringBootApplication
public class BackendCrudApplication {

	public static void main(String[] args){
		System.out.println("rodando");
		SpringApplication.run(BackendCrudApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(ProdutoRepositorio produtoRepositorio) {
		return args -> {
			Produto p1 = new Produto();
			p1.setDescricao("Produto 1");
			p1.setPreco(new BigDecimal("10.00"));
			p1.setQuantidade(10);
			p1.setStatus(Status.ativo);

			Produto p2 = new Produto();
			p2.setDescricao("Produto 2");
			p2.setPreco(new BigDecimal("10.00"));
			p2.setQuantidade(10);
			p2.setStatus(Status.inativo);

			produtoRepositorio.save(p1);
			produtoRepositorio.save(p2);
		};
	}
}
