package com.ecommerce.e_commerce.Repository;

import com.ecommerce.e_commerce.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<Users, Long> {

    @Query("SELECT u FROM Users u WHERE u.customerName = :customerName")
    List<Users> findByCustomerName(@Param("customerName") String customerName);

}
