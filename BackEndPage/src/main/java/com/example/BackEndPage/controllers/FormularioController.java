package com.example.BackEndPage.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.BackEndPage.models.FormularioModel;
import com.example.BackEndPage.services.FormularioService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/clientes")
public class FormularioController {

    @Autowired
    FormularioService formularioService;

    @PostMapping
    public void salvarFormulario(@RequestBody FormularioModel formularioModel) {        
        formularioService.salvarFormulario(formularioModel);
    }

    @GetMapping
    public List<FormularioModel> buscarFormularios() {
        return formularioService.buscarFormularios();
    }

    @GetMapping("/{idFormulario}")
    public FormularioModel buscarClienteId(@PathVariable Integer idFormulario) {
        return formularioService.buscarFormularioPorId(idFormulario);
    }

    @PutMapping("/{idFormulario}")
    public ResponseEntity<Object> atualizarPorFormulario(@PathVariable Integer idFormulario,
            @RequestBody FormularioModel formularioModel) {
        return formularioService.atualizarPorId(idFormulario, formularioModel);
    }

    @DeleteMapping("/{idFormulario}")
    public void deletarClientePorId(@PathVariable Integer idFormulario) {
        formularioService.deletarPorId(idFormulario);
    }

}
