const jwt = require("jsonwebtoken");
const { User } = require("../models");

module.exports = (roles = []) => {
  return async (req, res, next) => {
    console.log("Authorization middleware triggered");

    const header = req.headers.authorization ?? req.headers.Authorization;
    if (!header) {
      console.log("Authorization header missing");
      return res.status(401).json({ error: "Authorization header missing" });
    }

    const [type, token] = header.split(/\s+/);
    if (type !== "Bearer" || !token) {
      console.log("Invalid token format");
      return res.status(401).json({ error: "Invalid token format" });
    }

    try {
      console.log("Verifying token...");
      const payload = jwt.verify(
        token,
        process.env.JWT_SECRET || "MyVeryVeryVeryFormidableSecret&1L1kE17"
      );

      console.log("Token verified. Payload:", payload);

      const user = await User.findByPk(payload.id);
      if (!user) {
        console.log("User not found in database");
        return res.status(401).json({ error: "User not found" });
      }

      console.log("User found:", user);

      req.user = user;

      if (roles.length > 0 && !roles.includes(user.role)) {
        console.log("Insufficient rights for user:", user.role);
        return res.status(403).json({ error: "Access forbidden: insufficient rights" });
      }

      console.log("User authorized. Proceeding to next middleware...");
      next();
    } catch (error) {
      console.error("Token verification failed:", error);
      return res.status(401).json({ error: "Invalid or expired token" });
    }
  };
};
