package com.angular.app.blogapp.service;

import com.angular.app.blogapp.model.UserModel;

import java.util.List;

public interface UserService {

    public List<UserModel> getAllUser();
    public List<UserModel> getAllActiveUser();
    public UserModel getUserByName(String name);
    public UserModel getUser(Long id);
    public UserModel updateUser(Long id, UserModel user);
    public void deleteUser(Long id);
    public void createUser(UserModel userModel);
}
