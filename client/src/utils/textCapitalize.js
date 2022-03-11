export const textCapitalize = (value) => {
  if (typeof value !== 'string') {
    console.warn(`${value} is not valid for textCapitalize func`);
    return null;
  }
  return value.replace(value[0], value[0].toUpperCase());
};
