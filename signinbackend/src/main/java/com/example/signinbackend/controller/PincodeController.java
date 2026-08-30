package com.example.signinbackend.controller;

import com.example.signinbackend.service.PincodeService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/pincode")
@CrossOrigin(origins = "http://localhost:4200")
public class PincodeController {

    private final PincodeService pincodeService;

    public PincodeController(PincodeService pincodeService) {
        this.pincodeService = pincodeService;
    }

    @GetMapping("/{code}")
    public boolean checkPincode(@PathVariable String code) {
        return pincodeService.checkPincode(code);
    }
}