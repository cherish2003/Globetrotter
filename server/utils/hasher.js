const crypto = require("crypto");

const hashPassword = (password) => {
  const hashedPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
  return hashedPassword;
};

module.exports = hashPassword;
