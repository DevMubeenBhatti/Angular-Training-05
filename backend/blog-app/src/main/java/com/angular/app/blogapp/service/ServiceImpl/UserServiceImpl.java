package com.angular.app.blogapp.service.ServiceImpl;

import com.angular.app.blogapp.exception.UserNotFoundException;
import com.angular.app.blogapp.model.UserModel;
import com.angular.app.blogapp.repo.UserRepo;
import com.angular.app.blogapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public List<UserModel> getAllUser() {
        return userRepo.findAll();
    }

    @Override
    public List<UserModel> getAllActiveUser() {
        return userRepo.getActive();
    }

    @Override
    public UserModel getUserByName(String name) {
        return userRepo.findByName(name);
    }

    @Override
    public UserModel getUser(Long id) {
        return userRepo.findById(id).get();
    }


    @Override
    public UserModel updateUser(Long id, UserModel user) {
        Optional<UserModel> user1 = userRepo.findById(id);

        if(!user1.isPresent()){
            throw new UserNotFoundException("unable to find user");
        }else {
            UserModel user2 = user1.get();

            if (!user.getPassword().isEmpty()) {
                user2.setPassword(user.getPassword());
            }

            if (!user.getEmail().isEmpty()) {
                user2.setEmail(user.getEmail());
            }

            if (!user.getName().isEmpty()) {
                user2.setName(user.getName());
            }

            if (!user.getActive() == false) {
                user2.setActive(true);
            }

            userRepo.save(user2);

            return user2;
        }
    }

    @Override
    public void deleteUser(Long id) {
        Optional<UserModel> user1 = userRepo.findById(id);
        if(!user1.isPresent()){
            throw new UserNotFoundException("unable to find user OR user already deleted");
        }else {
            UserModel userModel = user1.get();
            if(userModel.getActive() == false){
                throw new UserNotFoundException("User already deleted");
            }
            userModel.setActive(false);
            userRepo.save(userModel);
        }
    }

    @Override
    public void createUser(UserModel userModel) {
        userRepo.save(userModel);
    }
}
