package com.angular.app.blogapp.service.ServiceImpl;

import com.angular.app.blogapp.exception.BlogNotFoundException;
import com.angular.app.blogapp.exception.UserNotFoundException;
import com.angular.app.blogapp.model.BlogsModel;
import com.angular.app.blogapp.model.UserModel;
import com.angular.app.blogapp.repo.BlogsRepo;
import com.angular.app.blogapp.service.BlogsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BlogsServiceImpl implements BlogsService {

    @Autowired
    BlogsRepo blogsRepo;

    @Override
    public List<BlogsModel> getAllBlogs() {
        return blogsRepo.findAll();
    }

    @Override
    public List<BlogsModel> getActiveBlog() {
        return blogsRepo.getActive();

    }

    @Override
    public void createBlog(BlogsModel blog) {
         blogsRepo.save(blog);

    }

    @Override
    public BlogsModel editBLog(Long id, BlogsModel Blog) {
        Optional<BlogsModel> blog = blogsRepo.findById(id);

        if(!blog.isPresent()){
            throw new BlogNotFoundException("unable to find blog or Blog does not exist");
        }else {
            BlogsModel blogsModel = blog.get();

            blogsModel.setContent(blogsModel.getContent());
            blogsModel.setDescription(blogsModel.getDescription());
            blogsModel.setTitle(blogsModel.getTitle());
            blogsModel.setActive(false);

            blogsRepo.save(blogsModel);

            return blogsModel;
        }
    }

    @Override
    public void deleteBlog(Long id) {
        Optional<BlogsModel> blog = blogsRepo.findById(id);

        if(!blog.isPresent()){
            throw new BlogNotFoundException("unable to find user");
        }else {
            BlogsModel blogsModel = blog.get();
            if(blogsModel.getActive() == true){
                throw new BlogNotFoundException("User already deleted");
            }
            blogsModel.setActive(true);
            blogsRepo.save(blogsModel);
        }

    }
}
