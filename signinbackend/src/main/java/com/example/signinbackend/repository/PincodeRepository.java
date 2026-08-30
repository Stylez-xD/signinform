package com.example.signinbackend.repository;

import com.example.signinbackend.model.Pincode;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PincodeRepository extends JpaRepository<Pincode, Long> {

    boolean existsByCode(String code);
}