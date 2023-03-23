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
        this.status = true
    }


}

let battery = new Battery()
battery.setEnergy(11)
battery.getEnergy()
battery.decreaseEnergy()
let newFashLamp = new FashLamp('on')
newFashLamp.light()
newFashLamp.setBattery(battery)

console.log(battery)
console.log(newFashLamp)



