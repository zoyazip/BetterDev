package com.example.betterdev_backend.developer;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "_developer")
public class DeveloperEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String rating;
    private String services;
    private String location;
    private String clients;
    private String url;
    @OneToOne
    @JoinColumn(name = "ImageEntity_id")
    private ImageEntity logo;
}
