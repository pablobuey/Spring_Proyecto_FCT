package org.example.models;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "empresas")
public class Empresa {
    /* NOTA:*
    / los nombres de los atributos (String nombre.. etc) tienen que ser iguales que los name ="nombre" etc).
     */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter @Column(name = "id")
    private Long id;
    @Getter @Setter @Column(name = "nombre")
    private String nombre;
    @Getter @Setter @Column(name = "direccion")
    private String direccion;
    @Getter @Setter @Column(name = "cp")
    private String cp;
    @Getter @Setter @Column(name = "localidad")
    private String localidad;
    @Getter @Setter @Column(name = "provincia")
    private String provincia;
    @Getter @Setter @Column(name = "cif")
    private String cif;
    @Getter @Setter @Column(name = "email")
    private String email;
    @Getter @Setter @Column(name = "telefono")
    private int telefono;
    @Getter @Setter @Column(name = "persona_contacto")
    private String persona_contacto;
    @Getter @Setter @Column(name = "password")
    private String password;
}