package com.angular.app.blogapp.controller;

import com.angular.app.blogapp.DTO.UserDto;
import com.angular.app.blogapp.model.UserModel;
import com.angular.app.blogapp.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1/")
@RestController()
public class UserController {

    @Autowired
    ModelMapper modelMapper;

    @Autowired
    UserService userService;

    @GetMapping(path = "/users")
    public List<UserModel> getAllUser(){
        return userService.getAllUser();
    }

    @GetMapping(path = "/usersActive")
    public List<UserModel> getAllActiveUser(){
        return userService.getAllActiveUser();
    }

    @GetMapping(path = "/user")
    public UserModel getUserByName(@RequestParam String name){
        return userService.getUserByName(name);
    }

    @GetMapping(path = "/users/{id}")
    public UserModel updateUser(@PathVariable Long id){
        return userService.getUser(id);
    }

    @PutMapping(path = "/users/{id}")
    public UserModel updateUser(@PathVariable Long id, @RequestBody UserDto user){

        return userService.updateUser(id,modelMapper.map(user,UserModel.class));
    }

    @PostMapping(path = "/users")
    public void createUser(@Valid @RequestBody UserDto user){

        userService.createUser(modelMapper.map(user,UserModel.class));
    }

    @DeleteMapping(path = "/users/{id}")
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    }

 }
