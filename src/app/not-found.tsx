import { Button } from '@/components/Button'
import { HeroPattern } from '@/components/HeroPattern'

export default function NotFound() {
  return (
    <>
      <HeroPattern />
      <div className="mx-auto flex h-full max-w-xl flex-col items-center justify-center py-16 text-center">
        <p className="text-sm font-semibold text-zinc-900 dark:text-white">
          404
        </p>
        <h1 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">
          Page not found
        </h1>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          Much of this web site is still a work-in-progress, and we are working hard to try and get all of the
          documentation migrated here. In the meantime, our 
          <a
            className="ml-2 mr-2 text-nowrap font-medium transition text-amber-500 hover:text-amber-600 dark:text-amber-400 dark:hover:text-amber-500"
            href="https://github.com/crowbartools/Firebot/wiki"
          >
            Github Wiki 
          </a>
          contains a vast selection of <i>historical</i> documentation.
        </p>
        <Button href="/" arrow="right" className="mt-8">
          Back to docs
        </Button>
      </div>
    </>
  )
}
