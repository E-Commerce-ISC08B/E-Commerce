package com.ecommerce.e_commerce.service;

import com.ecommerce.e_commerce.exception.ResourceNotFoundException;
import com.ecommerce.e_commerce.model.Users;
import com.ecommerce.e_commerce.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<Users> getAllUsers() {
        return userRepository.findAll();
    }

    public Users getUserById(Long id) throws ResourceNotFoundException {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id " + id));
    }

    public Users createUser(Users user) {
        return userRepository.save(user);
    }

    public Users updateUser(Long id, Users userDetails) throws ResourceNotFoundException {
        Users user = getUserById(id);
        user.setCustomerName(userDetails.getCustomerName());
        user.setEmail(userDetails.getEmail());
        user.setPassword(userDetails.getPassword());
        user.setBillingAddress(userDetails.getBillingAddress());
        user.setDefaultAddress(userDetails.getDefaultAddress());
        user.setCountry(userDetails.getCountry());
        user.setPhone(userDetails.getPhone());
        return userRepository.save(user);
    }

    public void deleteUser(Long id) throws ResourceNotFoundException {
        Users user = getUserById(id);
        userRepository.delete(user);
    }
}
