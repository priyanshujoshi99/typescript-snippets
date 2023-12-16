"use strict";
class CameraTS {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getReelTime() {
        return 8;
    }
}
class X extends CameraTS {
    constructor(cameraMode, filter, burst, ratio) {
        super(cameraMode, filter, burst);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.ratio = ratio;
    }
    getSepia() {
        console.log("Sepia!");
    }
}
const twitter = new X("front", "sepia", 3, "16:9");
console.log("reel time", twitter.getReelTime());
