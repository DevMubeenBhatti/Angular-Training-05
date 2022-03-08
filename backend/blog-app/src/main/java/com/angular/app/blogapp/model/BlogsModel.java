package com.angular.app.blogapp.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Blogs")
public class BlogsModel {

    @Id
    @GeneratedValue
    private Long blogID;

    private String title;
    private String description;
    private String content;
    private Boolean active;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "userID")
    private UserModel user;
}
