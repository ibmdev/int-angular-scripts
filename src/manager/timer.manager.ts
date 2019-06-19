export function attente(ms: number): Promise<any> {
  return new Promise(res => setTimeout(res, ms));
}
