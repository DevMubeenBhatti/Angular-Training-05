package com.angular.app.blogapp.controller;

import com.angular.app.blogapp.model.BlogsModel;
import com.angular.app.blogapp.service.BlogsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController("/api/1")
public class BlogsController {

    @Autowired
    BlogsService blogsService;

    @GetMapping(path = "/blogs")
    public List<BlogsModel> getAllBLogs(){
        return blogsService.getAllBlogs();
    }

    @GetMapping(path = "/blogsActive")
    public List<BlogsModel> getActiveBlogs(){
        return blogsService.getActiveBlog();
    }

    @PostMapping(path = "/blogs")
    public void createBlog(@RequestBody BlogsModel blog){
        blogsService.createBlog(blog);
    }

    @PutMapping(path = "/blogs/{id}")
    public BlogsModel editBlog(@RequestParam Long id, @RequestBody BlogsModel blog){
        return blogsService.editBLog(id,blog);
    }

    @DeleteMapping(path = "/blogs/{id}")
    public void deleteBlog(@RequestParam Long id){
        blogsService.deleteBlog(id);
    }
}
