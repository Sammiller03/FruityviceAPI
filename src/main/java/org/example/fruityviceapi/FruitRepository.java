package org.example.fruityviceapi;

import org.bson.types.ObjectId;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FruitRepository extends MongoRepository<Fruit, ObjectId> {

    Optional<Fruit> findById(Integer id);

    Optional<Fruit> findByName(String name); //these method names ie findBy[variable] must match that in the mongo db

    Page<Fruit> findAll(Pageable pageable); // fetch data based on the pageable instructions pageNumber and pageSize


}
