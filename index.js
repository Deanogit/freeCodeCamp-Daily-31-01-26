function getSign(dateStr) {
  console.log(dateStr);
  // turn into date & month
  const split = dateStr.split('-');
  console.log(split);
  const month = parseInt(split[1]);
  const day = parseInt(split[2]);
  console.log(month);
  console.log(day);

  const range = [
    {
      dayFrom: 21,
      monthFrom: 3,
      dayTo: 19,
      monthTo: 4,
      zodiac: 'Aries',
    },
    { dayFrom: 20, monthFrom: 4, dayTo: 20, monthTo: 5, zodiac: 'Taurus' },
    { dayFrom: 21, monthFrom: 5, dayTo: 20, monthTo: 6, zodiac: 'Gemini' },
    { dayFrom: 21, monthFrom: 6, dayTo: 22, monthTo: 7, zodiac: 'Cancer' },
    { dayFrom: 23, monthFrom: 7, dayTo: 22, monthTo: 8, zodiac: 'Leo' },
    { dayFrom: 23, monthFrom: 8, dayTo: 22, monthTo: 9, zodiac: 'Virgo' },
    { dayFrom: 23, monthFrom: 9, dayTo: 22, monthTo: 10, zodiac: 'Libra' },
    { dayFrom: 23, monthFrom: 10, dayTo: 21, monthTo: 11, zodiac: 'Scorpio' },
    {
      dayFrom: 22,
      monthFrom: 11,
      dayTo: 21,
      monthTo: 12,
      zodiac: 'Sagittarius',
    },
    { dayFrom: 22, monthFrom: 12, dayTo: 19, monthTo: 1, zodiac: 'Capricorn' },
    { dayFrom: 20, monthFrom: 1, dayTo: 18, monthTo: 2, zodiac: 'Aquarius' },
    { dayFrom: 19, monthFrom: 2, dayTo: 20, monthTo: 3, zodiac: 'Pisces' },
  ];

  const match = range.find((zodiac) => {
    const start = month === zodiac.monthFrom && day >= zodiac.dayFrom;
    const end = month === zodiac.monthTo && day <= zodiac.dayTo;
    return start || end;
  });
  console.log(match);
  return match ? match.zodiac : 'Unknown';
}

getSign('2023-03-19'); // "Pisces"
