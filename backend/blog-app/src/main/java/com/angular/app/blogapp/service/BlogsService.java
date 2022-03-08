package com.angular.app.blogapp.service;

import com.angular.app.blogapp.model.BlogsModel;

import java.util.List;

public interface BlogsService {

    public List<BlogsModel> getAllBlogs();
    public List<BlogsModel> getActiveBlog();
    public void createBlog(BlogsModel blog);
    public BlogsModel editBLog(Long id,BlogsModel Blog);
    public void deleteBlog(Long id);
}
