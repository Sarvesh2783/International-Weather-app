export const kelvinToCelsius = (kelvin) => {
  return Math.round(kelvin - 273.15);
};

export const kelvinToFahrenheit = (kelvin) => {
  return Math.round((kelvin - 273.15) * 9/5 + 32);
};

export const formatTemperature = (kelvin, locale, unit = 'celsius') => {
  let temperature;
  let unitSymbol;
  
  if (unit === 'celsius') {
    temperature = kelvinToCelsius(kelvin);
    unitSymbol = '°C';
  } else {
    temperature = kelvinToFahrenheit(kelvin);
    unitSymbol = '°F';
  }
  
  // Format number according to locale
  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: 0,
  }).format(temperature) + unitSymbol;
};
