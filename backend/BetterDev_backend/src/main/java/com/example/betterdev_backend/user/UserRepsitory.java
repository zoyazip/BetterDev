package com.example.betterdev_backend.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepsitory extends JpaRepository<User, Integer> {

    Optional<User> findByUsername(String username);

}
