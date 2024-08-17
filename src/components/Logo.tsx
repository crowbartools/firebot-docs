import Image from 'next/image';
import logoFirebot from '@/images/logos/firebot.svg'

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={logoFirebot}
        alt=""
        className="h-7 w-7 dark:text-yellow-300 drop-shadow-[0_0_3px_rgba(255,226,0,0.50)]"
        unoptimized
      />
      <span className="ml-2 text-xl font-bold text-zinc-900 dark:text-white">
        Firebot
      </span>
      <span className="ml-1 text-xl font-black text-zinc-900 dark:text-zinc-400">
        Docs
      </span>
    </div>
  )
}
