export const formatDate = (timestamp, locale) => {
  const date = new Date(timestamp * 1000);
  return new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

export const formatTime = (timestamp, locale) => {
  const date = new Date(timestamp * 1000);
  return new Intl.DateTimeFormat(locale, {
    hour: 'numeric',
    minute: 'numeric',
    hour12: locale.startsWith('en'),
  }).format(date);
};

export const formatDateTime = (timestamp, locale) => {
  const date = new Date(timestamp * 1000);
  return new Intl.DateTimeFormat(locale, {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: locale.startsWith('en'),
  }).format(date);
};
