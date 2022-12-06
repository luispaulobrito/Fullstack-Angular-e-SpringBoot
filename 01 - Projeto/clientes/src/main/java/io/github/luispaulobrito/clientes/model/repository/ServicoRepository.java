package io.github.luispaulobrito.clientes.model.repository;

import io.github.luispaulobrito.clientes.model.entity.Servico;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicoRepository extends JpaRepository<Servico, Integer> {
}
