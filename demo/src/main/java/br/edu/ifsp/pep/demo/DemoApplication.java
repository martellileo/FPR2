package br.edu.ifsp.pep.demo;

// import org.apache.catalina.valves.CrawlerSessionManagerValve;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import br.edu.ifsp.pep.demo.model.Curso;
import br.edu.ifsp.pep.demo.repositorio.CursoRepositorio;

@SpringBootApplication
public class DemoApplication {

	public static void main(String[] args) {
		System.out.println("teste....");
		SpringApplication.run(DemoApplication.class, args);
	}

	@Bean
	CommandLineRunner initDatabase(CursoRepositorio cursoRepositorio) {
		return args -> {

			Curso c1 = new Curso();
			c1.setNome("Angular");

			Curso c2 = new Curso();
			c2.setNome("Spring");

			cursoRepositorio.save(c1);
			cursoRepositorio.save(c2);
		};
	}

}
