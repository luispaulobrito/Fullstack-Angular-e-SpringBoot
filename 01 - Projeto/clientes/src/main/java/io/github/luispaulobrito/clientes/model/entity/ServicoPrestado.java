package io.github.luispaulobrito.clientes.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@Data
public class ServicoPrestado {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 150)
    private String descicao;

    @ManyToOne
    @JoinColumn(name = "id_cliente")
    public Cliente cliente;

    @Column
    private BigDecimal valor;

    @Column
    private LocalDate data;
}
