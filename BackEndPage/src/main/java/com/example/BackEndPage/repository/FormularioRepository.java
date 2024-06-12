package com.example.BackEndPage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.BackEndPage.models.FormularioModel;

public interface FormularioRepository extends JpaRepository<FormularioModel,Integer> {
    
}
