import { createLogger, format, transports } from "npm:winston";

const logFormat = format.combine(
  format.timestamp(),
  format.json(),
);

export const logger = createLogger({
  format: logFormat,
  transports: [
    new transports.Console(),
  ],
});
