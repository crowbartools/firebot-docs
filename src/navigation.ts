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
      { title: 'Time Variables', href: '/v5/guides/time-variable' },
      { title: 'Custom Variables', href: '/v5/guides/custom-variables' },
      { title: 'Manual Restore', href: '/v5/guides/manual-restore' },
    ],
  },
  {
    title: 'Troubleshooting',
    links: [
      { title: 'FAQ', href: '/v5/faq' },
    ],
  },
  {
    title: 'Custom scripts',
    links: [{ title: 'Quickstart', href: '/v5/dev/scripts' }],
  },
  {
    title: 'API reference',
    links: [
      { title: 'Overview', href: '/v5/api/overview' },
      { title: 'Authentication', href: '/v5/api/auth' },
      { title: 'Status', href: '/v5/api/status' },
      { title: 'Effects', href: '/v5/api/effects' },
      { title: 'Fonts', href: '/v5/api/fonts' },
      { title: 'Custom-Variables', href: '/v5/api/customvariables' },
      { title: 'Variables', href: '/v5/api/variables' },
      { title: 'Viewers', href: '/v5/api/viewers' },
      { title: 'CustomRoles', href: '/v5/api/customroles' },
      { title: 'Currency', href: '/v5/api/currency' },
      { title: 'Quotes', href: '/v5/api/quotes' },
      { title: 'Counters', href: '/v5/api/counters' },
      { title: 'Timers', href: '/v5/api/timers' },
      { title: 'Effect Queues', href: '/v5/api/effectqueue' },
      { title: 'WebSocket Endpoint', href: '/v5/api/websocket' },
    ],
  },
  {
    title: 'Contributing',
    links: [
      { title: 'Dev Environment Setup', href: '/v5/dev/environment-setup' },
    ],
  },
]
