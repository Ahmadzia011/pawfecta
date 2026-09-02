export const logger = (inProduction: boolean = false, type: "info" | "error" | "warn" | "debug", ...message: any[]) => {
    const isProduction = process.env.NODE_ENV === "production";

    if (isProduction && !inProduction) return;

    switch (type) {
        case "info":
            console.log(`[INFO: ${new Date().toISOString()}] `, ...message);
            break;
        case "error":
            console.error(`[ERROR: ${new Date().toISOString()}] `, ...message);
            break;
        case "warn":
            console.warn(`[WARN: ${new Date().toISOString()}] `, ...message);
            break;
        case "debug":
            console.debug(`[DEBUG: ${new Date().toISOString()}] `, ...message);
            break;
    }
}