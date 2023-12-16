interface Camera {
    cameraMode: string;
    filter: string;
    burst: number;
}

interface Reel {
    createReel(): void;
}

class Facebook implements Camera {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {}
}

class YouTube implements Camera {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public isShort: boolean
    ) {}
}

class Instagram implements Camera, Reel {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {}

    createReel(): void {
        console.log("Welcome to reels!");
    }
}

// -----------------------------------------------------------------

/* ---- in keyword ---- */

// -----------------------------------------------------------------

interface Quiz {
    totalMarks: number;
    type: string;
}

interface EndSem {
    totalMarks: number;
    type: string;
    subject: string;
}

function isEndSem(exam: Quiz | EndSem): boolean {
    if ("subject" in exam) {
        return true;
    }
    return false;
}
