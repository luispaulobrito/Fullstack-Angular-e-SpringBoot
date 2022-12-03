package io.github.luispaulobrito.clientes.model.entity;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //deixa a cargo do banco o autoincremento
    private Integer id;

    @Column(nullable = false, length = 150)
    private String nome;

    @Column(nullable = false, length = 11)
    private String cpf;

    @Column
    private LocalDate dataCadastro;
}
