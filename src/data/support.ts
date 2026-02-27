import { SupportTier } from '@/types'

export const SUPPORT_TIERS: SupportTier[] = [
  {
    id: 'coffee',
    name: 'Buy Me a Coffee',
    amount: 5,
    description: 'Keep the developer caffeinated and coding!',
    emoji: '☕',
    perks: [
      'Your name in the supporters list',
      'Access to the community Discord',
      'Early access to new components',
    ],
  },
  {
    id: 'supporter',
    name: 'Supporter',
    amount: 15,
    description: 'Help us build more incredible components.',
    emoji: '⚡',
    popular: true,
    perks: [
      'Everything in Coffee tier',
      'Vote on upcoming components',
      'Supporter badge on Discord',
      'Request a custom component',
    ],
  },
  {
    id: 'champion',
    name: 'Champion',
    amount: 49,
    description: "You're a true Zeervy UI champion!",
    emoji: '🏆',
    perks: [
      'Everything in Supporter tier',
      'Priority component requests',
      'Direct access to maintainers',
      'Your company logo on the site',
      'Early preview of new features',
    ],
  },
]
