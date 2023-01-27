package io.github.luispaulobrito.agendaapi.model.repository;

import io.github.luispaulobrito.agendaapi.model.entity.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContatoRepository extends JpaRepository<Contato, Integer> {
}
