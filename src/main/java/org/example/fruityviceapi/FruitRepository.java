package org.example.fruityviceapi;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FruitRepository extends MongoRepository<Fruit, ObjectId> {

    Optional<Fruit> findById(Integer id);

    Optional<Fruit> findByName(String name); //these method names ie findBy[variable] must match that in the mongo db
}
