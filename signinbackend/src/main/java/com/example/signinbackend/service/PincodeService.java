package com.example.signinbackend.service;

import com.example.signinbackend.repository.PincodeRepository;
import org.springframework.stereotype.Service;

@Service
public class PincodeService {

    private final PincodeRepository pincodeRepository;

    public PincodeService(PincodeRepository pincodeRepository) {
        this.pincodeRepository = pincodeRepository;
    }

    public boolean checkPincode(String code) {
        return pincodeRepository.existsByCode(code);
    }
}