package com.angular.app.blogapp.repo;

import com.angular.app.blogapp.model.BlogsModel;
import com.angular.app.blogapp.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlogsRepo extends JpaRepository<BlogsModel, Long> {

    @Query(value="Select * from blog-app.blogsmodel where active = 1", nativeQuery=true)
    List<BlogsModel> getActive();
}
