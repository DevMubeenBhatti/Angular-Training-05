package com.angular.app.blogapp.exception;

public class BlogNotFoundException extends RuntimeException {
    public BlogNotFoundException(String msg) {
        super(msg);
    }
}
