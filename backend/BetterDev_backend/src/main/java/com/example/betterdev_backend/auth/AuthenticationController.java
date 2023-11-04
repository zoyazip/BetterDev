package com.example.betterdev_backend.auth;

import com.example.betterdev_backend.developer.DeveloperEntity;
import com.example.betterdev_backend.developer.DeveloperRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final DeveloperRepository developerRepository;
    private final AuthenticationService service;

    @PostMapping("/register")
    public ResponseEntity<AuthenticationResponse> register(@RequestBody RegisterRequest request) {
        return ResponseEntity.ok(service.register(request));
    }


    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@RequestBody AuthenticationRequest request) {
        return ResponseEntity.ok(service.authenticate(request));
    }

    @PostMapping("/add")
    public ResponseEntity<DeveloperEntity> add(@RequestBody DeveloperEntity developerEntity) throws Exception {
        // Validate the developerEntity body.
        System.out.println("Called");
        if (developerEntity.getName() == null || developerEntity.getName().isEmpty()) {
            throw new Exception("The developer name is required.");
        }

        // Save the developerEntity to the database.
        DeveloperEntity savedDeveloperEntity = developerRepository.save(developerEntity);

        return ResponseEntity.ok(savedDeveloperEntity);
    }
}


