import { CorsOptions } from "cors";

export const corsOptions: CorsOptions = {
  allowedHeaders: [
    "Access-Control-Allow-Headers",
    "Origin",
    "X-Requested-With",
    "Content-Type",
    "Accept",
    "Authorization",
    "X-HTTP-Method-Override",
    "X-CSRF-TOKEN"
  ],
  preflightContinue: true,
  credentials: true,
  methods: "GET,PUT,PATCH,POST,DELETE",
  origin: []
};
