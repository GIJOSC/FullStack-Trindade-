// [M1S10] Ex 4 - Middleware JTW Validator

const jwt = require("jsonwebtoken");

function validateAuthToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token || token === "Bearer") {
    return res.status(403).json({ message: "Token não encontrado" });
  }

  const tokenJwt = token.slice(7);

  jwt.verify(tokenJwt, process.env.TOKEN_KEY, (err, decoded) => {
    if (err) {
      if (err.name === "TokenExpiredError") {
        return res.status(401).json({ err: "Token expirado" });
      } else if (err.name === "JsonWebTokenError") {
        return res.status(401).json({ err: "Token inválido" });
      } else {
        return res
          .status(500)
          .json({ error: "Não conseguimos processar sua solicitão!" });
      }
    } else {
      req.body.userId = decoded.id;
      return next();
    }
  });
}

module.exports = validateAuthToken;
