package com.example.betterdev_backend.developer;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/developer")
@RequiredArgsConstructor
public class DeveloperController {
    private final DeveloperRepository developerRepository;
    private final ImageRepository imageRepository;

    @PostMapping("/add")
    public ResponseEntity<DeveloperEntity> add(@RequestParam("clients") String clients, @RequestParam("location") String location, @RequestParam("name") String name, @RequestParam("rating") String rating, @RequestParam("services") String services, @RequestParam("url") String url, @RequestParam("file") MultipartFile file) {

        System.out.println("Called");
        DeveloperEntity developerEntity = new DeveloperEntity();

        developerEntity.setLogo(createImage(file));

        developerEntity.setName(name);
        developerEntity.setClients(clients);
        developerEntity.setRating(rating);
        developerEntity.setLocation(location);
        developerEntity.setServices(services);
        developerEntity.setUrl(url);

        DeveloperEntity savedDeveloperEntity = developerRepository.save(developerEntity);

        return ResponseEntity.ok(savedDeveloperEntity);
    }

    public ImageEntity createImage(MultipartFile file) {
        try {
            if (file != null) {
                ImageEntity image = new ImageEntity();
                image.setImageData(file.getBytes());
                image.setName(file.getOriginalFilename());
                image.setDataType(file.getContentType());
                return imageRepository.save(image);
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        return null;
    }


    @DeleteMapping("/remove-all")
    public void removeAll() {
        developerRepository.deleteAll();
    }

    @PostMapping("/uploadImage")
    public ResponseEntity<ImageEntity> uploadImage(@RequestParam("logo") MultipartFile file) {
        try {
            ImageEntity image = new ImageEntity();
            image.setName(file.getOriginalFilename());
            image.setImageData(file.getBytes());
            image.setDataType(file.getContentType());
            ImageEntity imageEntity = imageRepository.save(image);

            return ResponseEntity.ok(imageEntity);
        } catch (Exception e) {
            System.out.println("Failed image upload");
            return null;
        }
    }

    @GetMapping("/image/{id}")
    public ResponseEntity<byte[]> getImage(@PathVariable Integer id) {
        ImageEntity image = imageRepository.findById(id).get();
        byte[] imageData = image.getImageData();
        HttpHeaders headers = new HttpHeaders();

        switch (image.getDataType()) {
            case "image/png":
                headers.setContentType(MediaType.IMAGE_PNG);
                break;
            case "image/jpeg":
                headers.setContentType(MediaType.IMAGE_JPEG);
                break;
            default:
                break;
        }

        return ResponseEntity.ok().headers(headers).body(imageData);
    }

    @DeleteMapping("/remove-images")
    public void removeImages(){
        imageRepository.deleteAll();
    }

    @GetMapping("/{developer}")
    public ResponseEntity<DeveloperEntity> getUser(@PathVariable DeveloperEntity developer) {
        return ResponseEntity.ok(developer);
    }

    @GetMapping("/all")
    public ResponseEntity<List<DeveloperEntity>> getAllEntities() {
        List<DeveloperEntity> entities = developerRepository.findAll();
        return ResponseEntity.ok(entities);
    }

    @DeleteMapping("/remove/{id}")
    public void removeDeveloper(@PathVariable Integer id) {
        developerRepository.delete(developerRepository.getReferenceById(id));
        imageRepository.delete(developerRepository.getReferenceById(id).getLogo());
    }

    @PutMapping("/update/{id}")
    public DeveloperEntity editDeveloper(@PathVariable Integer id, @RequestParam("clients") String clients, @RequestParam("location") String location, @RequestParam("name") String name, @RequestParam("rating") String rating, @RequestParam("services") String services, @RequestParam("url") String url, @RequestParam("file") MultipartFile file) {

        developerRepository.findById(id).map(developer -> {
            developer.setLogo(createImage(file));
            developer.setName(name);
            developer.setRating(rating);
            developer.setUrl(url);
            developer.setLocation(location);
            developer.setClients(clients);
            developer.setServices(services);

            return developerRepository.save(developer);
        });

        return null;
    }
}
