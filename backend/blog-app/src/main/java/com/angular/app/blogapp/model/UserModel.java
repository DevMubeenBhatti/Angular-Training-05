package com.angular.app.blogapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserModel {

    @Id @GeneratedValue
    private Long userID;
    private String name;
    private String email;
    private String password;
    private Boolean active;

}
