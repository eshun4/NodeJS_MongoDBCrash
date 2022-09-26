class Circle {
    area(r) {
        return Math.PI * (r**2);
    }

    circumference(r){
        return 2 * Math.PI * r;
    }
}

module.exports = Circle;