package com.example.signinbackend;

import com.example.signinbackend.model.Pincode;
import com.example.signinbackend.repository.PincodeRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final PincodeRepository pincodeRepository;

    public DataLoader(PincodeRepository pincodeRepository) {
        this.pincodeRepository = pincodeRepository;
    }

    public void run(String... args) {

        if (pincodeRepository.count() == 0) {

            addPincode("411001");
            addPincode("411002");
            addPincode("411003");
            addPincode("400001");
            addPincode("400002");
            addPincode("110001");
            addPincode("110002");
            addPincode("560001");
            addPincode("560002");
            addPincode("500001");
        }
    }

    private void addPincode(String code) {
        Pincode pincode = new Pincode();
        pincode.setCode(code);
        pincodeRepository.save(pincode);
    }
}