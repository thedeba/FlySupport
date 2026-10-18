export type ServiceSummary = {
  href: string;
  title: string;
  description: string;
};

export const SERVICES: ServiceSummary[] = [
  {
    href: "/flight-booking",
    title: "Flight Booking",
    description:
      "Discuss flight options for an upcoming trip with our team by phone.",
  },
  {
    href: "/flight-changes",
    title: "Flight Changes",
    description:
      "Plans moved? Talk through the available change options for your ticket.",
  },
  {
    href: "/flight-cancellation",
    title: "Flight Cancellation",
    description:
      "Understand cancellation rules, possible refunds, and your next steps.",
  },
  {
    href: "/missed-flight",
    title: "Missed Flight Assistance",
    description:
      "Missed your flight? Find out what options may still be available.",
  },
  {
    href: "/last-minute-flights",
    title: "Last-Minute Flights",
    description:
      "Need to fly soon? Discuss available last-minute options with our team.",
  },
  {
    href: "/airline-canceled-flight",
    title: "Airline Canceled Flight",
    description:
      "Airline canceled on you? Review your rebooking and refund choices.",
  },
];
