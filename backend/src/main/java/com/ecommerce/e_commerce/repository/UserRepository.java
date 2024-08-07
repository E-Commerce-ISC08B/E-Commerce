package com.ecommerce.e_commerce.repository;

import com.ecommerce.e_commerce.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query; 
import org.springframework.data.repository.query.Param; 
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {

    
    @Query("SELECT u FROM Users u WHERE u.customerName = :customerName")
    List<Users> findByCustomerName(@Param("customerName") String customerName);

    Users findByEmail(String email);
}
