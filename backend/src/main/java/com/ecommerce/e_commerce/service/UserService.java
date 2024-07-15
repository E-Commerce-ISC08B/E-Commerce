package com.ecommerce.e_commerce.service;

import com.ecommerce.e_commerce.exception.ResourceNotFoundException;
import com.ecommerce.e_commerce.model.User;
import com.ecommerce.e_commerce.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(Long id) throws ResourceNotFoundException {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id " + id));
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(Long id, User userDetails) throws ResourceNotFoundException {
        User user = getUserById(id);
        user.setFirstName(userDetails.getFirstName());
        user.setLastName(userDetails.getLastName());
        user.setEmail(userDetails.getEmail());
        user.setPassword(userDetails.getPassword());
        user.setActive(userDetails.isActive());
        return userRepository.save(user);
    }

    public void deleteUser(Long id) throws ResourceNotFoundException {
        User user = getUserById(id);
        userRepository.delete(user);
    }
}
