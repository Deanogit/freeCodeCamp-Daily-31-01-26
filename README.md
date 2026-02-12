## Zodiac Finder

Given a date string in the format "YYYY-MM-DD", return the zodiac sign for that date using the following chart:

Date Range Zodiac Sign
March 21 - April 19 "Aries"
April 20 - May 20 "Taurus"
May 21 - June 20 "Gemini"
June 21 - July 22 "Cancer"
July 23 - August 22 "Leo"
August 23 - September 22 "Virgo"
September 23 - October 22 "Libra"
October 23 - November 21 "Scorpio"
November 22 - December 21 "Sagittarius"
December 22 - January 19 "Capricorn"
January 20 - February 18 "Aquarius"
February 19 - March 20 "Pisces"
Zodiac signs are based only on the month and day, you can ignore the year.

### Solution

1. `.split("-")` the string -> [year, month, date];
2. Store month & day in variables;
3. Create array of objects to store the lower and upper bounds of each zodiac sign;
4. `const match = ranges.find((zodiac) => {})`
5. Create two variables to hold a boolean if a condition is met;
6. Check the month is the same than startMonth and check day is greater than startDay
7. Or
8. Check the month is the same as endMonth and check day is less than endDay.
9. Inside the `.find()` methods, return start or end (one should be true)
10. return `match.zodiac`
