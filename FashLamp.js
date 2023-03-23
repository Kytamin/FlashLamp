class FashLamp {
    status
    battery;

    constructor(status) {
        this.status = status
    }

    setBattery(battery) {
        this.battery = battery
    }

    getBatteryInfo() {
        return this.battery
    }

    light() {
        if (this.status) {
            alert("Lingting")
        } else {
            alert("not linghting")
        }

    }

    turnOff() {

        this.status = false
    }

    turnOn() {
        if (battery.getEnergy()===0){
            this.status= false
        }else {
            this.status=true
        }

    }


}

let battery = new Battery()
battery.setEnergy(parseInt(prompt("pin")))
battery.getEnergy()
battery.decreaseEnergy()
let newFashLamp = new FashLamp('on')
newFashLamp.setBattery(battery)
newFashLamp.turnOn()
newFashLamp.light()
console.log(battery.getEnergy())
console.log(newFashLamp)



