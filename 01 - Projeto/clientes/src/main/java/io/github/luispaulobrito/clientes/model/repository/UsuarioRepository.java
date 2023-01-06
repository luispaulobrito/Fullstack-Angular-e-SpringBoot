package io.github.luispaulobrito.clientes.model.repository;

import io.github.luispaulobrito.clientes.model.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
}
