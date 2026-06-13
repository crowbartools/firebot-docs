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
            { title: 'Commands', href: '/v5/core/commands' },
            { title: 'Events', href: '/v5/core/events' },
            { title: 'Timers And Scheduled Effects', href: '/v5/core/timers' },
            { title: 'Channel Rewards', href: '/v5/core/channel-rewards' },
            { title: 'Power-Ups', href: '/v5/core/power-ups' },
            { title: 'Preset Effect Lists', href: '/v5/core/preset-effect-lists' },
            { title: 'Hotkeys', href: '/v5/core/hotkeys' },
            { title: 'Counters', href: '/v5/core/counters' },
            { title: 'Variables', href: '/v5/core/variables' },
            { title: 'Restrictions', href: '/v5/core/restrictions' },
            { title: 'Effect Queues', href: '/v5/core/effect-queues' },
            { title: 'Setups', href: '/v5/core/setups' },
            { title: 'Overlay Widgets', href: '/v5/core/overlay-widgets' },
        ],
    },
    {
        title: 'Guides',
        links: [
            { title: 'Effect Queues', href: '/v5/guides/effect-queues' },
            { title: 'Conditional Effects', href: '/v5/guides/conditional-effects' },
            { title: 'Switch Statement Effects', href: '/v5/guides/switch-effects' },
            { title: 'Time Variables', href: '/v5/guides/time-variable' },
            { title: 'Custom Variables', href: '/v5/guides/custom-variables' },
            { title: 'Evaluate JavaScript', href: '/v5/guides/evaluate-javascript' },
            { title: 'Manual Restore', href: '/v5/guides/manual-restore' },
            { title: 'Metadata', href: '/v5/guides/metadata' },
        ],
    },
    {
        title: 'Troubleshooting',
        links: [{ title: 'FAQ', href: '/v5/faq' }],
    },
    {
        title: 'Custom scripts',
        links: [{ title: 'Quickstart', href: '/v5/dev/scripts' }],
    },
    {
        title: 'API reference',
        links: [
            { title: 'Overview', href: '/v5/dev/api' },
            { title: 'OAuth', href: '/v5/dev/api/oauth' },
            { title: 'Status', href: '/v5/dev/api/status' },
            { title: 'Effects', href: '/v5/dev/api/effects' },
            { title: 'Custom Variables', href: '/v5/dev/api/custom-variables' },
            { title: 'Replace Variables', href: '/v5/dev/api/replace-variables' },
            { title: 'Viewers', href: '/v5/dev/api/viewers' },
            { title: 'Custom Roles', href: '/v5/dev/api/custom-roles' },
            { title: 'Currency', href: '/v5/dev/api/currency' },
            { title: 'Quotes', href: '/v5/dev/api/quotes' },
            { title: 'Counters', href: '/v5/dev/api/counters' },
            { title: 'Timers', href: '/v5/dev/api/timers' },
            { title: 'Effect Queues', href: '/v5/dev/api/effect-queues' },
        ],
    },
    {
        title: 'WebSocket',
        links: [{ title: 'Overview', href: '/v5/dev/websocket' }],
    },
    {
        title: 'Contributing',
        links: [{ title: 'Dev Environment Setup', href: '/v5/dev/environment-setup' }],
    },
]
