package com.angular.app.blogapp.repo;

import com.angular.app.blogapp.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<UserModel,Long> {

    @Query(value="Select * from blog-app.usermodel where active = 1", nativeQuery=true)
    List<UserModel> getActive();

    UserModel findByName(String name);

}
