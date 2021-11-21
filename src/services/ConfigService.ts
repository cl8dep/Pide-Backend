export function isDevelopment() {
  return process.env.NODE_ENV !== 'production';
}

export function getHost(): string {
  return process.env.HOST;
}
