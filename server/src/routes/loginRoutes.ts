import { NextFunction, Request, Response } from "express";
import { AppRouter } from "../AppRouter";

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send("Not Permitted");
}

const router = AppRouter.getInstance();

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
    <div>
      <div> You are logged in</div>
      <a href="/logout">Logout </a>
    </div>
    `);
  } else {
    res.send(`
    <div>
      <div> You are logged out</div>
      <a href="/auth/login">Login </a>
    </div>
    `);
  }
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email === "hi@hi.com" && password === "password") {
    // mark person logged in
    // redirect to root
    req.session = { loggedIn: true };
    res.redirect("/");
  } else {
    res.send("Invalid email or password");
  }
});

router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to protected route, logged in user");
});

export { router };
