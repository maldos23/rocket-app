export function currencyFormatter(value = 0) {
  return value.toLocaleString("es-MX", { style: "currency", currency: "MXN" });
}
