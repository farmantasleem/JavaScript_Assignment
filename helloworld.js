class Car {
    constructor(car,engine){
        this.engine=engine;
        this.carName=car;
    }

    engineDetails(){
        console.log(this.engine)
    }

}

const resp = new Car("Maruti Suzuki","Best");

class Suv extends Car {
    constructor(){
        super("SUV","GREAT")
    }
}

const newResp = new Suv();
newResp.engineDetails()