

package com.api.usuarios.entity;

import java.time.LocalDate;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/**
 *
 * @author Alejandro Sainz Sainz
 */

@Entity
@Table(name = "usuario")
public class Usuario {

    @Id
    @Column(name="id_usuario")
    String idUsuario = UUID.randomUUID().toString();

    @Column(name="first_name", nullable=false)
    String firstName;

    @Column(name="last_name", nullable=false)
    String lastName;

    @Column(name="birth_date", nullable=false)
    LocalDate birthDate;

    @Column(name="username", nullable=false)
    String userName;

    @Column(name="email", nullable=false)
    String email;

    @Column(name="image", nullable=false)
    String image;

    @Column(name="user_password", nullable=false)
    String userPassword;

    @Column(name="years_experience", nullable=false)
    byte yearsExperience;

    @Column(name="comments", nullable=false)
    String comments;

    public Usuario() {
    }

    public Usuario(String idUsuario, String firstName, String lastName, LocalDate birthDate, String userName,
            String email, String image, String userPassword, byte yearsExperience, String comments) {
        
        this.idUsuario = idUsuario;
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.userName = userName;
        this.email = email;
        this.image = image;
        this.userPassword = userPassword;
        this.yearsExperience = yearsExperience;
        this.comments = comments;
    }

    // public String getId() {
    //     return id;
    // }

    // public void setId(String id) {
    //     this.id = id;
    // }

    public String getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(String idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public LocalDate getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public byte getYearsExperience() {
        return yearsExperience;
    }

    public void setYearsExperience(byte yearsExperience) {
        this.yearsExperience = yearsExperience;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    

    
}
