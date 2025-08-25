import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  // Set cookie with more permissive settings for cross-domain
  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true,
    sameSite: "none", // Allow cross-site requests
    secure: true, // Required for sameSite: "none"
    path: "/", // Ensure cookie is available for all paths
    domain: process.env.NODE_ENV === "production" ? ".onrender.com" : undefined,
  });

  // Also set the token in the response header for debugging
  res.setHeader("X-Auth-Token", token);

  return token;
};
