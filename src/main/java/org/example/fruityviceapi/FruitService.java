package org.example.fruityviceapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class FruitService {

    @Autowired
    private FruitRepository fruitRepository; //contains mongodb methods like findAll() findById() and more

    public Page<Fruit> getAll(Pageable pageable) {
        return fruitRepository.findAll(pageable);
    }

    public List<Fruit> getAllFruits() {
        return fruitRepository.findAll();
    }

    public Optional<Fruit> getById(int id) {
        return fruitRepository.findById(id);
    }

    public Optional<Fruit> getByName(String name) {
        return fruitRepository.findByName(name);
    }

}
