class Vehicle{
    model;
    licenseplate;
    mileage;
    constructor(model,licenseplate,mileage){
        this.model=model;
        this.licenseplate=licenseplate;
        this.mileage=mileage;
    }
    drive(miles){
        console.log(miles,"you have to drive");
    }
    getmileage(){
        console.log(this.mileage,"is the mileage of your vehicle");
    }
}
var fz=new Vehicle(fz,6616,1000000);
fz.drive(500)
fz.getmileage()
console.log("--------------------------------")
var R15=new Vehicle(R15,7701,10000000)
R15.drive(700);
R15.getmileage();