interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,
    // startTrail: () => string
    startTrail(): string,
    getCoupon(couponName: string): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: 'leader' | 'TA'
}

const user: Admin = {
    dbId: 22, 
    githubToken: 'github',
    role: 'leader',
    email: 'h@mail.com', 
    userId: 2211, 
    startTrail: () => "trail started",
    getCoupon(couponName) {
        return 2
    },
}

export { }
