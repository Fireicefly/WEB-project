import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (res, userId) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: "30d"
    })

        res.cookie("jwt", token, {
            httpOnly: true, // Prevents client JS from reading the cookie
            maxAge: 30 * 24 * 60 * 60 * 1000,
            sameSite: "strict",
            secure: process.env.NODE_ENV !== "development"
        });

}

export default generateTokenAndSetCookie;