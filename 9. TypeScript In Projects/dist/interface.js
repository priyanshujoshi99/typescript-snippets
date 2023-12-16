"use strict";
class Facebook {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class YouTube {
    constructor(cameraMode, filter, burst, isShort) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.isShort = isShort;
    }
}
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    createReel() {
        console.log("Welcome to reels!");
    }
}
function isEndSem(exam) {
    if ("subject" in exam) {
        return true;
    }
    return false;
}
