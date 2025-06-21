package org.example.fruityviceapi;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document; //instances of this class should be stored in a MongoDB collection

@Document(collection = "fruits")
@Data //Lombok not working with intellij ide right now so just generate Getters and Setters for now...
@AllArgsConstructor
@NoArgsConstructor
public class Fruit {

    @Id
    private ObjectId _id;

    private String name;
    private Integer id;
    private String family;
    private String order;
    private String genus;

    private Nutrition nutritions;

    public ObjectId get_id() {
        return _id;
    }

    public void set_id(ObjectId _id) {
        this._id = _id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFamily() {
        return family;
    }

    public void setFamily(String family) {
        this.family = family;
    }

    public String getOrder() {
        return order;
    }

    public void setOrder(String order) {
        this.order = order;
    }

    public String getGenus() {
        return genus;
    }

    public void setGenus(String genus) {
        this.genus = genus;
    }

    public Nutrition getNutritions() {
        return nutritions;
    }

    public void setNutritions(Nutrition nutritions) {
        this.nutritions = nutritions;
    }
}

