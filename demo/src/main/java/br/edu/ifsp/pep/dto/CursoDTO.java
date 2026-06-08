package br.edu.ifsp.pep.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record CursoDTO(
    @NotBlank(message = "Nome é obrigatório")
    @Size(min = 5, max = 20, message = "O nome deve ter no minimo 5 caracteres e no máximo 20")
    String nome
    ) {
}
