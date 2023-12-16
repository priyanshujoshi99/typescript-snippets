abstract class CameraTS {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {}

    abstract getSepia(): void;

    getReelTime(): number {
        return 8;
    }
}

class X extends CameraTS {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public ratio: string
    ) {
        super(cameraMode, filter, burst);
    }

    getSepia(): void {
        console.log("Sepia!");
    }
}

const twitter = new X("front", "sepia", 3, "16:9");

console.log("reel time", twitter.getReelTime());
