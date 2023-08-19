const cookieOptions = {
  expires: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
  httpOnly: false,
  secure: true,
  sameSite: "none",
};

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200,
};

//
//
//

export { cookieOptions, corsOptions };

//
//
//

// const allowedOrigins = [
//   "https://puma-store.onrender.com",
//   "http://localhost:3000",
// ];

// const corsOptions = {
//   origin: (origin, callback) => {
//     if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     } else {
//       callback({ message: "Not Allowed by CORS" });
//     }
//   },
//   credentials: true,
//   optionSuccessStatus: 200,
// };
