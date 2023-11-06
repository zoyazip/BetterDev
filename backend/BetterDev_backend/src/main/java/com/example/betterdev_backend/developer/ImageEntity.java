package com.example.betterdev_backend.developer;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "_image")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ImageEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String dataType;
    @Lob
    private byte[] imageData;


}
