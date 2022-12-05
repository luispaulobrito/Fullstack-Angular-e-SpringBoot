package io.github.luispaulobrito.clientes.model.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.math.BigDecimal;

@Entity
@Data
public class Servico {
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
}
