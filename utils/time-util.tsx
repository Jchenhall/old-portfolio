"use client";
interface TimeUtility {
  format: (date: Date) => string;
  formatHours: (hours: number) => string;
  formatSegment: (segment: number) => string;
}

export const T: TimeUtility = {
  format: (date: Date): string => {
    const hours: string = T.formatHours(date.getHours()),
      minutes: any = date.getMinutes(),
      seconds: any = date.getSeconds();

    return `${hours}:${T.formatSegment(minutes)}`;
  },
  formatHours: (hours: number): any => {
    return hours % 12 === 0 ? 12 : hours % 12;
  },
  formatSegment: (segment: number): any => {
    return segment < 10 ? `0${segment}` : segment;
  },
};
