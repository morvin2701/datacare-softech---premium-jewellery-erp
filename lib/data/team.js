export const founder = {
  id: '00',
  name: 'Sanjay Vekariya',
  role: 'Owner & Founder',
  bio: 'Visionary leader and founder of Datacare Softech, pioneering digital transformation for the jewellery industry across India and the UAE.',
  image: '/team/00.png',
};

/**
 * Team leaders (tier 2). `image` is optional — leaders without a photo render
 * with an elegant initials avatar, so new leaders can be added with just a
 * name and role.
 */
export const teamLeaders = [
  {
    id: '01',
    name: 'Hemal Soni',
    role: 'Team Leader & Sales Executive',
    image: '/team/01.png',
  },
  {
    id: '02',
    name: 'Vishal Gundalia',
    role: 'Team Leader & Sales Executive',
    image: '/team/02.png',
  },
  {
    id: '03',
    name: 'Vikas Barvadiya',
    role: 'Team Leader & Sales Executive',
    image: '/team/03.png',
  },
  {
    id: '04',
    name: 'Devendra Dobariya',
    role: 'Team Leader & Sales Executive',
    image: '/team/10.png',
  },
];

/**
 * The wider team (tier 3) shown as a collective — adjust counts to the
 * actual headcount per department.
 */
export const teamDepartments = [
  { key: 'development', label: 'Software development', count: 5 },
  { key: 'implementation', label: 'Implementation & onboarding', count: 4 },
  { key: 'support', label: 'Customer support', count: 4 },
  { key: 'operations', label: 'Accounts & operations', count: 2 },
];

export const totalTeamSize = 25;
