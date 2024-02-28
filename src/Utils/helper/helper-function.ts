export const isNullish = (value: unknown) =>
  value === null || value === undefined;

export const currencyInputFormatter = (inputValue: string) => {
    const rawValue = inputValue?.replace(/[^\d.]/g, '');
    const parts = rawValue?.split('.');
  
    const integerPart = Number(parts[0] || 0).toLocaleString();
    const decimalPart = !isNullish(parts[1])
      ? `.${parts[1]?.substring(0, 2)}`
      : '';
  
    return {
      parts,
      originalValue: inputValue,
      hasDecimal: !!parts[1],
      currency: `${integerPart}${decimalPart}`,
      integerPart,
      decimalPart,
    };
};
  
export const currencyConverter = (amount:number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumSignificantDigits: 3,
  }).format(amount);