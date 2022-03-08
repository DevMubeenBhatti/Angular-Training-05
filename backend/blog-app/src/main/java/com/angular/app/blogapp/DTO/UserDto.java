package com.angular.app.blogapp.DTO;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.Data;

@Data
public class UserDto {

    private Long userID;
    @NotBlank
    private String name;
    @NotBlank @Email
    private String email;
    @NotBlank @NotNull
    private String password;
    @NotNull
    private Boolean active = true;
}
