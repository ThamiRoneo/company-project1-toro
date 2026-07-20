// Shared locations data — single source of truth consumed by the About page
// and the dedicated /locations page. Pulled from torocoffee.co.za/locations.php.
export const LOCATIONS = [
  {
    id: "bult",
    name: "Toro Bult",
    address: "99 Molen St, Potchefstroom, 2520",
    hours: [
      { day: "Monday – Friday", open: "7:00 AM", close: "5:00 PM" },
      { day: "Saturday", open: "8:00 AM", close: "1:00 PM" },
      { day: "Sunday", open: "Closed", close: null },
    ],
    image: "https://torocoffee.co.za/uploads/location_1775495811_69d3ea83920bc.jpg",
    maps: "https://www.google.com/maps/search/?api=1&query=99+Molen+St%2C+Potchefstroom",
  },
  {
    id: "van-der-hoff",
    name: "Toro van der Hoff",
    address: "34 Klinkenberg St, Van Der Hoff Park, Potchefstroom",
    hours: [
      { day: "Monday – Friday", open: "7:00 AM", close: "5:00 PM" },
      { day: "Saturday", open: "8:00 AM", close: "1:00 PM" },
      { day: "Sunday", open: "Closed", close: null },
    ],
    image: "https://torocoffee.co.za/uploads/location_1776234994_69df31f28a348.jpg",
    maps: "https://www.google.com/maps/search/?api=1&query=34+Klinkenberg+St%2C+Van+Der+Hoff+Park%2C+Potchefstroom",
  },
  {
    id: "gimmies",
    name: "Toro Gimmies",
    address: "43 Thabo Mbeki Way, Gimnasium, Potchefstroom, 2520",
    hours: [
      { day: "Monday – Friday", open: "6:30 AM", close: "6:00 PM" },
      { day: "Saturday", open: "Open per event", close: null },
      { day: "Sunday", open: "Closed", close: null },
    ],
    image: "https://torocoffee.co.za/uploads/location_1771334185_69946a29036c8.jpg",
    maps: "https://www.google.com/maps/search/?api=1&query=43+Thabo+Mbeki+Way%2C+Gimnasium%2C+Potchefstroom%2C+2520",
  },
  {
    id: "nations",
    name: "Toro Nations",
    address: "94 Steve Biko St, Die Bult, Potchefstroom, 2520",
    hours: [
      { day: "Monday – Friday", open: "7:00 AM", close: "5:00 PM" },
      { day: "Saturday", open: "8:00 AM", close: "1:00 PM" },
      { day: "Sunday", open: "Closed", close: null },
    ],
    image: "https://torocoffee.co.za/uploads/location_1770615030_698970f63d0e0.jpg",
    maps: "https://www.google.com/maps/search/?api=1&query=94+Steve+Biko+St%2C+Die+Bult%2C+Potchefstroom%2C+2520",
  },
];

export const LOCATION_HEADING = "Our Locations";
export const LOCATION_SUBHEADING = "Find a Toro near you. Every store, same quality, same passion.";
