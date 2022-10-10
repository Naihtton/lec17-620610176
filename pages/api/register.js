export default function registerRoute(req, res) {
  const { email, pwd, address, gender, plan } = req.body;
  // validate body at backend
  const regex = /^\S+@\S+\.\S+$/;
  if (typeof email !== "string" || regex.test(email) === false) {
    return res
      .status(400)
      .json({ ok: false, message: "Please insert email correctly" });
  } else if (typeof pwd !== "string" || pwd.length < 6 || pwd.length > 12) {
    return res
      .status(400)
      .json({ ok: false, message: "Password must contain 6 - 12 characters" });
  } else if (typeof address !== "string" || address.length === 0) {
    return res
      .status(400)
      .json({ ok: false, message: "Please insert address" });
  } else if (["male", "female"].includes(gender) === false) {
    return res.status(400).json({ ok: false, message: "Please select gender" });
  } else if (["full", "half", "mini"].includes(plan) === false) {
    return res.status(400).json({ ok: false, message: "Please select plan" });
  }

  //save data in database
  //...

  return res.json({ ok: true });
}
