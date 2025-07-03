package org.example.fruityviceapi;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PagedResourcesAssembler;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.PagedModel;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/fruits") // this rest controller routes to these endpoints
@CrossOrigin(origins = "http://localhost:3000")
public class FruitController {

    @Autowired
    private FruitService fruitService;

    @GetMapping("/pageable")
    public ResponseEntity<PagedModel<EntityModel<Fruit>>> getFirstTwoPageable(Pageable pageable, PagedResourcesAssembler<Fruit> assembler) {

        //PageRequest pageZeroSize20 = PageRequest.of(0, 20);
        Page<Fruit> fruit = fruitService.getAll(pageable);

        return new ResponseEntity<>(assembler.toModel(fruit), HttpStatus.OK);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Fruit>> getAllFruits() {
        return new ResponseEntity<>(fruitService.getAllFruits(), HttpStatus.OK);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<Optional<Fruit>> getById(@PathVariable int id) {
        return new ResponseEntity<>(fruitService.getById(id), HttpStatus.OK);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<Optional<Fruit>> getByName(@PathVariable String name) {
        return new ResponseEntity<>(fruitService.getByName(name), HttpStatus.OK);
    }

}
