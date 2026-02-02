class vector3 {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    scale(num) {
        this.x *= num;
        this.y *= num;
        this.z *= num;
    }

    static dot(a, b) {
        return a.x * b.x + a.y * b.y + a.z * b.z;
    }

    static cross(a, b) {
        return new vector3(
            a.y * b.z - a.z * b.y,
            a.z * b.x - a.x * b.z,
            a.x * b.y - a.y * b.x
        );
    }

    project(d) {
        return new vector2(this.x * d / (d + this.z), this.y * d / (d + this.z));
    }
}

class vector2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    scale(num) {
        this.x *= num;
        this.y *= num;
    }

    static dot(a, b) {
        return a.x * b.x + a.y * b.y;
    }

    toString() {
        return `\\left(${this.x},${this.y}\\right)`;
    }
}

function rotateZ(a, radian) {
    const cosine_value = Math.cos(radian);
    const sine_value = Math.sin(radian);
    return new vector3(
        a.x * cosine_value + a.y * sine_value,
        a.y * cosine_value - a.x * sine_value,
        a.z,
    );
}

function rotateX(a, radian) {
    const cosine_value = Math.cos(radian);
    const sine_value = Math.sin(radian);
    return new vector3(
        a.x,
        a.y * cosine_value + a.z * sine_value,
        a.z * cosine_value - a.y * sine_value,
    );
}

function rotateY(a, radian) {
    const cosine_value = Math.cos(radian);
    const sine_value = Math.sin(radian);
    return new vector3(
        a.x * cosine_value + a.y * sine_value,
        a.y * cosine_value - a.x * sine_value,
        a.z,
    );
}