export const getEnvValue = (key: string, defaultValue: string) => {
    return process.env[key] || defaultValue;
};
