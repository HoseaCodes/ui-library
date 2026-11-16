/**
 * Small structured logger, same call shape as the old winston CustomLogger:
 *
 *   const logger = new Logger("invoices");
 *   logger.info("Created invoice", { id });
 *   logger.error("Upload failed", err);
 *
 * Writes one line per entry to stdout/stderr, which Vercel, Docker and most
 * hosts capture (the old version wrote to ./logs, which serverless can't keep).
 * Set LOG_FORMAT=json for machine-readable output and LOG_LEVEL to filter.
 */

type Level = "debug" | "info" | "warn" | "error";

const LEVELS: Record<Level, number> = { debug: 10, info: 20, warn: 30, error: 40 };

function minLevel(): number {
  const env = (process.env.LOG_LEVEL ?? "").toLowerCase() as Level;
  if (env in LEVELS) return LEVELS[env];
  return process.env.NODE_ENV === "production" ? LEVELS.info : LEVELS.debug;
}

function serialize(data: unknown): unknown {
  if (data instanceof Error) {
    return { name: data.name, message: data.message, stack: data.stack };
  }
  return data;
}

export class Logger {
  constructor(
    private readonly service: string,
    private context: Record<string, unknown> = {},
  ) {}

  /** Attach fields (request id, user id…) to every later entry. */
  setLogData(data: Record<string, unknown>) {
    this.context = { ...this.context, ...data };
  }

  /** A logger for a sub-area that keeps this one's context. */
  child(service: string) {
    return new Logger(`${this.service}:${service}`, { ...this.context });
  }

  debug(message: string, data?: unknown) {
    this.write("debug", message, data);
  }
  info(message: string, data?: unknown) {
    this.write("info", message, data);
  }
  warn(message: string, data?: unknown) {
    this.write("warn", message, data);
  }
  error(message: string, data?: unknown) {
    this.write("error", message, data);
  }

  private write(level: Level, message: string, data?: unknown) {
    if (LEVELS[level] < minLevel()) return;

    const time = new Date().toISOString();
    const extra = data === undefined ? undefined : serialize(data);
    const hasContext = Object.keys(this.context).length > 0;

    let line: string;
    if (process.env.LOG_FORMAT === "json") {
      line = JSON.stringify({
        time,
        level,
        service: this.service,
        message,
        ...(hasContext && { context: this.context }),
        ...(extra !== undefined && { data: extra }),
      });
    } else {
      line = `${time} | ${level.toUpperCase().padEnd(5)} | ${this.service} | ${message}`;
      if (hasContext) line += ` | ${JSON.stringify(this.context)}`;
      if (extra !== undefined) line += ` | ${JSON.stringify(extra)}`;
    }

    if (level === "error") console.error(line);
    else if (level === "warn") console.warn(line);
    else console.log(line);
  }
}

export default Logger;
