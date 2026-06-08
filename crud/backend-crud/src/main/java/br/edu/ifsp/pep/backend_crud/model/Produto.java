package br.edu.ifsp.pep.backend_crud.model;

import java.math.BigDecimal;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "produto")
@Data
public class Produto {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codigo;

    @Column(name = "descricao", nullable = false, length = 30)
    private String descricao;

    @Column(name = "preco", nullable = false, scale = 2, precision = 6)
    private BigDecimal preco;

    @Column(name = "quantidade", nullable = false)
    private int quantidade;

    @Column(name = "status", nullable = false)
    private Status status;
}
