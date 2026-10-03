// Where DataCare Next is installed. Edit numbers and cities here — the map
// updates itself. Every state listed is clickable and zooms into its districts.
//
// count  = installations in that state (totals 7,000). These were scaled up
//          from the old statistics map — replace with real figures when ready.
// lon/lat = where the state's pin sits on the India map.
// cities = shown when the state is opened. Optional per city:
//          hq: true (main city), anchor: 'end' (label on left), dy: nudge label.
//
// TODO (management): confirm the city list for each state.

export const states = [
  {
    name: 'Gujarat', count: 5957, lon: 71.3, lat: 22.5,
    cities: [
      { name: 'Ahmedabad', lon: 72.57, lat: 23.03, hq: true },
      { name: 'Gandhinagar', lon: 72.65, lat: 23.22, dy: -8 },
      { name: 'Surat', lon: 72.83, lat: 21.17 },
      { name: 'Rajkot', lon: 70.8, lat: 22.3 },
      { name: 'Vadodara', lon: 73.19, lat: 22.31 },
      { name: 'Bhavnagar', lon: 72.15, lat: 21.76 },
      { name: 'Jamnagar', lon: 70.07, lat: 22.47 },
      { name: 'Junagadh', lon: 70.46, lat: 21.52 },
      { name: 'Mehsana', lon: 72.37, lat: 23.59, anchor: 'end' },
      { name: 'Anand', lon: 72.95, lat: 22.56, dy: 12 },
      { name: 'Nadiad', lon: 72.86, lat: 22.69, dy: -9 },
      { name: 'Amreli', lon: 71.22, lat: 21.6 },
      { name: 'Morbi', lon: 70.84, lat: 22.82, anchor: 'end' },
      { name: 'Surendranagar', lon: 71.64, lat: 22.73 },
      { name: 'Bharuch', lon: 72.99, lat: 21.7, dy: 10 },
      { name: 'Navsari', lon: 72.93, lat: 20.95 },
      { name: 'Vapi', lon: 72.9, lat: 20.37 },
      { name: 'Palanpur', lon: 72.43, lat: 24.17 },
      { name: 'Deesa', lon: 72.19, lat: 24.26, anchor: 'end' },
      { name: 'Patan', lon: 72.13, lat: 23.85 },
      { name: 'Himmatnagar', lon: 72.96, lat: 23.6 },
      { name: 'Modasa', lon: 73.3, lat: 23.46 },
      { name: 'Godhra', lon: 73.61, lat: 22.78 },
      { name: 'Dahod', lon: 74.26, lat: 22.84 },
      { name: 'Bhuj', lon: 69.67, lat: 23.25 },
      { name: 'Gandhidham', lon: 70.13, lat: 23.08 },
      { name: 'Porbandar', lon: 69.61, lat: 21.64 },
      { name: 'Veraval', lon: 70.37, lat: 20.91 },
      { name: 'Gondal', lon: 70.8, lat: 21.96 },
      { name: 'Jetpur', lon: 70.62, lat: 21.75, anchor: 'end', dy: -9 },
      { name: 'Botad', lon: 71.67, lat: 22.17, dy: 10 },
      { name: 'Mahuva', lon: 71.77, lat: 21.08 },
      { name: 'Dwarka', lon: 68.97, lat: 22.24 },
      { name: 'Unjha', lon: 72.39, lat: 23.8, dy: -9 },
      { name: 'Visnagar', lon: 72.55, lat: 23.7, dy: 12 },
      { name: 'Kalol', lon: 72.5, lat: 23.25, anchor: 'end' },
      { name: 'Ankleshwar', lon: 73.0, lat: 21.63, anchor: 'end' },
      { name: 'Bardoli', lon: 73.11, lat: 21.12, anchor: 'end', dy: 10 },
      { name: 'Valsad', lon: 72.93, lat: 20.61 },
      { name: 'Dhoraji', lon: 70.45, lat: 21.73, anchor: 'end', dy: 10 },
      { name: 'Keshod', lon: 70.25, lat: 21.3, anchor: 'end' },
      { name: 'Wankaner', lon: 70.94, lat: 22.61, dy: -9 },
      { name: 'Dhrangadhra', lon: 71.47, lat: 22.99, anchor: 'end' },
      { name: 'Limbdi', lon: 71.81, lat: 22.57, dy: 10 },
      { name: 'Jasdan', lon: 71.21, lat: 22.04 },
      { name: 'Palitana', lon: 71.83, lat: 21.52, anchor: 'end' },
      { name: 'Savarkundla', lon: 71.3, lat: 21.34, dy: 10 },
      { name: 'Una', lon: 71.03, lat: 20.82 },
      { name: 'Khambhat', lon: 72.62, lat: 22.31 },
      { name: 'Vyara', lon: 73.39, lat: 21.11, dy: 10 },
    ],
  },
  {
    name: 'Maharashtra', count: 400, lon: 76.0, lat: 19.4,
    cities: [
      { name: 'Mumbai', lon: 72.88, lat: 19.08, hq: true },
      { name: 'Thane', lon: 72.98, lat: 19.22, dy: -9 },
      { name: 'Pune', lon: 73.86, lat: 18.52 },
      { name: 'Nashik', lon: 73.79, lat: 20.0 },
      { name: 'Nagpur', lon: 79.09, lat: 21.15 },
      { name: 'Chhatrapati Sambhajinagar', lon: 75.34, lat: 19.88 },
      { name: 'Kolhapur', lon: 74.24, lat: 16.7 },
      { name: 'Solapur', lon: 75.91, lat: 17.68 },
      { name: 'Jalgaon', lon: 75.56, lat: 21.01 },
      { name: 'Sangli', lon: 74.57, lat: 16.85, dy: 10 },
      { name: 'Amravati', lon: 77.76, lat: 20.93 },
      { name: 'Akola', lon: 77.0, lat: 20.7, anchor: 'end' },
      { name: 'Satara', lon: 74.0, lat: 17.69, anchor: 'end' },
      { name: 'Ahilyanagar', lon: 74.75, lat: 19.09 },
      { name: 'Latur', lon: 76.57, lat: 18.4 },
      { name: 'Nanded', lon: 77.3, lat: 19.14 },
      { name: 'Dhule', lon: 74.78, lat: 20.9, anchor: 'end' },
      { name: 'Ratnagiri', lon: 73.3, lat: 16.99, anchor: 'end' },
      { name: 'Chandrapur', lon: 79.3, lat: 19.95 },
    ],
  },
  {
    name: 'Rajasthan', count: 200, lon: 73.6, lat: 26.9,
    cities: [
      { name: 'Jaipur', lon: 75.79, lat: 26.91, hq: true },
      { name: 'Jodhpur', lon: 73.02, lat: 26.24 },
      { name: 'Udaipur', lon: 73.71, lat: 24.59 },
      { name: 'Kota', lon: 75.86, lat: 25.21 },
      { name: 'Ajmer', lon: 74.64, lat: 26.45, anchor: 'end' },
      { name: 'Bikaner', lon: 73.31, lat: 28.02 },
      { name: 'Bhilwara', lon: 74.63, lat: 25.35 },
      { name: 'Alwar', lon: 76.63, lat: 27.55 },
      { name: 'Sikar', lon: 75.14, lat: 27.61, anchor: 'end' },
      { name: 'Pali', lon: 73.33, lat: 25.77, anchor: 'end' },
      { name: 'Sri Ganganagar', lon: 73.88, lat: 29.92 },
      { name: 'Jalore', lon: 72.62, lat: 25.35, anchor: 'end' },
      { name: 'Barmer', lon: 71.4, lat: 25.75 },
      { name: 'Nagaur', lon: 73.74, lat: 27.2 },
      { name: 'Beawar', lon: 74.32, lat: 26.1, dy: 10 },
      { name: 'Chittorgarh', lon: 74.63, lat: 24.88, dy: 10 },
      { name: 'Banswara', lon: 74.44, lat: 23.55 },
    ],
  },
  {
    name: 'Chhattisgarh', count: 100, lon: 82.0, lat: 21.2,
    cities: [
      { name: 'Raipur', lon: 81.63, lat: 21.25, hq: true },
      { name: 'Bilaspur', lon: 82.14, lat: 22.08 },
      { name: 'Durg–Bhilai', lon: 81.33, lat: 21.19, anchor: 'end' },
      { name: 'Raigarh', lon: 83.4, lat: 21.9 },
      { name: 'Korba', lon: 82.75, lat: 22.35 },
      { name: 'Rajnandgaon', lon: 81.03, lat: 21.1, anchor: 'end', dy: 10 },
      { name: 'Jagdalpur', lon: 82.02, lat: 19.08 },
      { name: 'Ambikapur', lon: 83.2, lat: 23.12 },
      { name: 'Dhamtari', lon: 81.55, lat: 20.71 },
      { name: 'Mahasamund', lon: 82.1, lat: 21.11, dy: 10 },
    ],
  },
  {
    name: 'Madhya Pradesh', count: 60, lon: 78.4, lat: 23.6,
    cities: [
      { name: 'Indore', lon: 75.86, lat: 22.72, hq: true },
      { name: 'Bhopal', lon: 77.41, lat: 23.26 },
      { name: 'Ujjain', lon: 75.78, lat: 23.18, anchor: 'end' },
      { name: 'Jabalpur', lon: 79.94, lat: 23.18 },
      { name: 'Gwalior', lon: 78.18, lat: 26.22 },
      { name: 'Ratlam', lon: 75.04, lat: 23.33, anchor: 'end' },
      { name: 'Dewas', lon: 76.05, lat: 22.96, dy: 10 },
      { name: 'Mandsaur', lon: 75.07, lat: 24.07, anchor: 'end' },
      { name: 'Neemuch', lon: 74.87, lat: 24.47, anchor: 'end' },
      { name: 'Sagar', lon: 78.74, lat: 23.84 },
      { name: 'Khandwa', lon: 76.35, lat: 21.83 },
      { name: 'Burhanpur', lon: 76.23, lat: 21.31 },
    ],
  },
  {
    name: 'Assam', count: 55, lon: 92.9, lat: 26.3,
    cities: [
      { name: 'Guwahati', lon: 91.74, lat: 26.14, hq: true },
      { name: 'Dibrugarh', lon: 94.91, lat: 27.47 },
      { name: 'Jorhat', lon: 94.21, lat: 26.75 },
      { name: 'Silchar', lon: 92.79, lat: 24.83 },
      { name: 'Tezpur', lon: 92.79, lat: 26.63 },
      { name: 'Nagaon', lon: 92.68, lat: 26.35, dy: 10 },
      { name: 'Tinsukia', lon: 95.36, lat: 27.49, dy: 10 },
      { name: 'Bongaigaon', lon: 90.56, lat: 26.48 },
    ],
  },
  {
    name: 'Uttar Pradesh', count: 30, lon: 80.7, lat: 27.1,
    cities: [
      { name: 'Lucknow', lon: 80.95, lat: 26.85, hq: true },
      { name: 'Kanpur', lon: 80.35, lat: 26.45, anchor: 'end' },
      { name: 'Varanasi', lon: 83.0, lat: 25.32 },
      { name: 'Agra', lon: 78.01, lat: 27.18 },
      { name: 'Meerut', lon: 77.71, lat: 28.98 },
      { name: 'Prayagraj', lon: 81.85, lat: 25.44 },
      { name: 'Gorakhpur', lon: 83.37, lat: 26.76 },
      { name: 'Bareilly', lon: 79.43, lat: 28.37 },
    ],
  },
  {
    name: 'West Bengal', count: 30, lon: 87.9, lat: 23.4,
    cities: [
      { name: 'Kolkata', lon: 88.36, lat: 22.57, hq: true },
      { name: 'Howrah', lon: 88.26, lat: 22.59, anchor: 'end' },
      { name: 'Siliguri', lon: 88.43, lat: 26.73 },
      { name: 'Durgapur', lon: 87.32, lat: 23.52 },
      { name: 'Asansol', lon: 86.98, lat: 23.68, anchor: 'end' },
      { name: 'Kharagpur', lon: 87.33, lat: 22.35 },
    ],
  },
  {
    name: 'Karnataka', count: 30, lon: 76.1, lat: 15.0,
    cities: [
      { name: 'Bengaluru', lon: 77.59, lat: 12.97, hq: true },
      { name: 'Hubballi', lon: 75.12, lat: 15.36 },
      { name: 'Belagavi', lon: 74.5, lat: 15.85 },
      { name: 'Mysuru', lon: 76.64, lat: 12.3 },
      { name: 'Mangaluru', lon: 74.86, lat: 12.91, anchor: 'end' },
      { name: 'Davangere', lon: 75.92, lat: 14.46 },
    ],
  },
  {
    name: 'Delhi', count: 30, lon: 77.1, lat: 28.6,
    cities: [
      { name: 'Karol Bagh', lon: 77.19, lat: 28.65, hq: true },
      { name: 'Chandni Chowk', lon: 77.23, lat: 28.66, dy: -10 },
      { name: 'Lajpat Nagar', lon: 77.24, lat: 28.57 },
      { name: 'Rohini', lon: 77.11, lat: 28.74 },
      { name: 'Dwarka', lon: 77.04, lat: 28.59, anchor: 'end' },
      { name: 'Pitampura', lon: 77.13, lat: 28.7, anchor: 'end' },
    ],
  },
  {
    name: 'Haryana', count: 15, lon: 76.0, lat: 29.7,
    cities: [
      { name: 'Gurugram', lon: 77.03, lat: 28.46, hq: true },
      { name: 'Faridabad', lon: 77.32, lat: 28.41, dy: 10 },
      { name: 'Hisar', lon: 75.72, lat: 29.15 },
      { name: 'Karnal', lon: 76.99, lat: 29.69 },
      { name: 'Panipat', lon: 76.97, lat: 29.39 },
      { name: 'Rohtak', lon: 76.61, lat: 28.9, anchor: 'end' },
      { name: 'Ambala', lon: 76.78, lat: 30.38 },
    ],
  },
  {
    name: 'Odisha', count: 15, lon: 84.6, lat: 20.5,
    cities: [
      { name: 'Bhubaneswar', lon: 85.82, lat: 20.3, hq: true },
      { name: 'Cuttack', lon: 85.88, lat: 20.46, dy: -9 },
      { name: 'Rourkela', lon: 84.85, lat: 22.26 },
      { name: 'Sambalpur', lon: 83.97, lat: 21.47 },
      { name: 'Berhampur', lon: 84.79, lat: 19.31 },
    ],
  },
  {
    name: 'Telangana', count: 15, lon: 79.2, lat: 18.0,
    cities: [
      { name: 'Hyderabad', lon: 78.47, lat: 17.39, hq: true },
      { name: 'Warangal', lon: 79.59, lat: 17.98 },
      { name: 'Nizamabad', lon: 78.09, lat: 18.67 },
      { name: 'Karimnagar', lon: 79.13, lat: 18.44 },
    ],
  },
  {
    name: 'Punjab', count: 10, lon: 75.3, lat: 31.1,
    cities: [
      { name: 'Ludhiana', lon: 75.86, lat: 30.9, hq: true },
      { name: 'Amritsar', lon: 74.87, lat: 31.63 },
      { name: 'Jalandhar', lon: 75.58, lat: 31.33 },
      { name: 'Patiala', lon: 76.39, lat: 30.34 },
      { name: 'Bathinda', lon: 74.95, lat: 30.21 },
    ],
  },
  {
    name: 'Arunachal Pradesh', count: 10, lon: 94.4, lat: 28.1,
    cities: [
      { name: 'Itanagar', lon: 93.62, lat: 27.1, hq: true },
      { name: 'Naharlagun', lon: 93.7, lat: 27.1, dy: 12 },
      { name: 'Pasighat', lon: 95.33, lat: 28.07 },
    ],
  },
  {
    name: 'Bihar', count: 8, lon: 85.6, lat: 25.8,
    cities: [
      { name: 'Patna', lon: 85.14, lat: 25.6, hq: true },
      { name: 'Gaya', lon: 85.0, lat: 24.8 },
      { name: 'Muzaffarpur', lon: 85.39, lat: 26.12 },
      { name: 'Bhagalpur', lon: 86.98, lat: 25.25 },
    ],
  },
  {
    name: 'Tamil Nadu', count: 8, lon: 78.5, lat: 11.0,
    cities: [
      { name: 'Chennai', lon: 80.27, lat: 13.08, hq: true },
      { name: 'Coimbatore', lon: 76.96, lat: 11.02, anchor: 'end' },
      { name: 'Madurai', lon: 78.12, lat: 9.93 },
      { name: 'Tiruchirappalli', lon: 78.7, lat: 10.79 },
    ],
  },
  {
    name: 'Andhra Pradesh', count: 6, lon: 79.9, lat: 15.6,
    cities: [
      { name: 'Vijayawada', lon: 80.65, lat: 16.51, hq: true },
      { name: 'Visakhapatnam', lon: 83.22, lat: 17.69 },
      { name: 'Guntur', lon: 80.44, lat: 16.31, anchor: 'end', dy: 10 },
    ],
  },
  {
    name: 'Nagaland', count: 5, lon: 94.4, lat: 26.1,
    cities: [
      { name: 'Dimapur', lon: 93.73, lat: 25.9, hq: true },
      { name: 'Kohima', lon: 94.11, lat: 25.67 },
    ],
  },
  {
    name: 'Himachal Pradesh', count: 3, lon: 77.3, lat: 31.9,
    cities: [
      { name: 'Shimla', lon: 77.17, lat: 31.1, hq: true },
      { name: 'Mandi', lon: 76.93, lat: 31.71 },
    ],
  },
  {
    name: 'Uttarakhand', count: 3, lon: 79.3, lat: 30.2,
    cities: [
      { name: 'Dehradun', lon: 78.03, lat: 30.32, hq: true },
      { name: 'Haridwar', lon: 78.16, lat: 29.95, dy: 10 },
    ],
  },
  {
    name: 'Jharkhand', count: 3, lon: 85.5, lat: 23.6,
    cities: [
      { name: 'Ranchi', lon: 85.31, lat: 23.34, hq: true },
      { name: 'Jamshedpur', lon: 86.2, lat: 22.8 },
    ],
  },
  {
    name: 'Mizoram', count: 3, lon: 92.9, lat: 23.4,
    cities: [
      { name: 'Aizawl', lon: 92.72, lat: 23.73, hq: true },
    ],
  },
  {
    name: 'Kerala', count: 2, lon: 76.3, lat: 10.3,
    cities: [
      { name: 'Kochi', lon: 76.27, lat: 9.93, hq: true },
      { name: 'Thrissur', lon: 76.21, lat: 10.53 },
    ],
  },
  {
    name: 'Meghalaya', count: 2, lon: 91.3, lat: 25.5,
    cities: [
      { name: 'Shillong', lon: 91.88, lat: 25.58, hq: true },
    ],
  },
];

export const totalStates = states.length;
export const totalCustomers = states.reduce((n, s) => n + s.count, 0);
export const totalCities = states.reduce((n, s) => n + s.cities.length, 0);
