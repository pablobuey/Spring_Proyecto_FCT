package org.example.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "usuarios")

public class Usuario {

    //@GeneratedValue(strategy = GenerationType.SEQUENCE)
    //@Column(name = "id", nullable = false)
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY) //esto es para que genere autom. el ID
    @Getter @Setter @Column(name = "id")
    private Long id;
    @Getter @Setter @Column(name = "nombre")
    private String nombre;
    @Getter @Setter @Column(name = "apellido")
    private String apellido;
    @Getter @Setter @Column(name = "email")
    private String email;
    @Getter @Setter @Column(name = "telefono")
    private String telefono;
    @Getter @Setter @Column(name = "password")
    private String password;


}
