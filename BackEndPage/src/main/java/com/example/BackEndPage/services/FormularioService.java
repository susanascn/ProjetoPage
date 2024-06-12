package com.example.BackEndPage.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.BackEndPage.models.FormularioModel;
import com.example.BackEndPage.repository.FormularioRepository;

@Service
public class FormularioService {

    @Autowired
    FormularioRepository formularioRepository;

    public void salvarFormulario(FormularioModel formularioModel) {
        formularioRepository.save(formularioModel);
    }

    public List<FormularioModel> buscarFormularios() {
        return (List<FormularioModel>) formularioRepository.findAll();
    }

    public FormularioModel buscarFormularioPorId(Integer id) {
        Optional<FormularioModel> formularioOptional = formularioRepository.findById(id);
        return formularioOptional.orElse(null);
    }

    public ResponseEntity<Object> atualizarPorId(Integer id, FormularioModel formularioModel) {
        Optional<FormularioModel> formularioOptional = formularioRepository.findById(id);
        if (formularioOptional.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Formulario não encontrado.");
        }
        formularioRepository.save(formularioModel);
        return ResponseEntity.status(HttpStatus.OK).body(formularioModel);
    }

    public void deletarPorId(Integer id) {
        formularioRepository.deleteById(id);

    }

}
