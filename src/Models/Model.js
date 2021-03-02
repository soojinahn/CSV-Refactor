const City = require('./City');

class Model{
    constructor(data, model){
        this.data = data;
        this.model = model;
    }

    //Factory method to create new model
    static create(data, model){
        if(model == "City"){
            return new City(data);
        }
        else{
            return new Model(data, model);
        }
    }
}

module.exports = Model;