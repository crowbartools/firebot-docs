import { NavGroup } from './types/nav'

export const nav: Array<NavGroup> = [
  {
    title: 'Getting started',
    links: [
      { title: 'Introduction', href: '/' },
      { title: 'Quickstart', href: '/quickstart' },
    ],
  },
  {
    title: 'Core concepts',
    links: [
      { title: 'Effects', href: '/v5/core/effects' },
      { title: 'Commands', href: '/commands' },
      { title: 'Events', href: '/events' },
      { title: 'Timers', href: '/timers' },
      { title: 'Channel Rewards', href: '/channel-rewards' },
      { title: 'Preset Effect Lists', href: '/preset-effect-lists' },
      { title: 'Hotkeys', href: '/hotkeys' },
      { title: 'Counters', href: '/counters' },
      { title: 'Variables', href: '/variables' },
      { title: 'Effect Queues', href: '/effect-queues' },
      { title: 'Setups', href: '/setups' },
    ],
  },
  {
    title: 'Guides',
    links: [
      { title: 'Alert Queues', href: '/guides/alert-queues' },
      { title: 'Conditional Effects', href: '/v5/guides/conditional-effects' },
      { title: 'Time Variables', href: '/v5/guides/time-variables' },
      { title: 'Custom Variables', href: '/v5/guides/custom-variables' },
    ],
  },
  {
    title: 'Troubleshooting',
    links: [
      { title: 'FAQ', href: '/v5/faq' },
      { title: 'Manual Restore', href: '/v5/guides/manual-restore' },
    ],
  },
  {
    title: 'Custom scripts',
    links: [{ title: 'Quickstart', href: '/v5/dev/scripts' }],
  },
  {
    title: 'API reference',
    links: [
      { title: 'Contacts', href: '/contacts' },
      { title: 'Conversations', href: '/conversations' },
      { title: 'Messages', href: '/messages' },
      { title: 'Groups', href: '/groups' },
      { title: 'Attachments', href: '/attachments' },
    ],
  },
  {
    title: 'Contributing',
    links: [
      { title: 'Dev Environment Setup', href: '/v5/dev/environment-setup' },
    ],
  },
]
