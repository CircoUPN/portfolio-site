'use client'

interface LogoItem {
  src: string
  alt: string
  top: number    // % of container height
  left: number   // % of container width
  animClass: string
  delay: number  // s
  duration: number // s
}

const logos: LogoItem[] = [
  {
    src: 'https://mobbin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fchatgpt.ca41d0c2.webp&w=1920&q=75&dpl=dpl_26NJBPpDLYAMSEtjKrFeFEQN8JwK',
    alt: 'ChatGPT logo',
    top: 0, left: 54.9, animClass: 'float-logo-a', delay: 0, duration: 6.5,
  },
  {
    src: 'https://mobbin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fheadspace.b6ad42a9.webp&w=1920&q=75&dpl=dpl_26NJBPpDLYAMSEtjKrFeFEQN8JwK',
    alt: 'Headspace logo',
    top: 11.4, left: 89.1, animClass: 'float-logo-b', delay: 1.5, duration: 7.2,
  },
  {
    src: 'https://mobbin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnike.e36df995.webp&w=1920&q=75&dpl=dpl_26NJBPpDLYAMSEtjKrFeFEQN8JwK',
    alt: 'Nike logo',
    top: 88.6, left: 74.5, animClass: 'float-logo-c', delay: 2.3, duration: 8.1,
  },
  {
    src: 'https://mobbin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdropbox.b8e44d6f.png&w=1920&q=75&dpl=dpl_26NJBPpDLYAMSEtjKrFeFEQN8JwK',
    alt: 'Dropbox logo',
    top: 14.3, left: 31.4, animClass: 'float-logo-d', delay: 0.8, duration: 7.8,
  },
  {
    src: 'https://mobbin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcreme.6dedf9f9.webp&w=1920&q=75&dpl=dpl_26NJBPpDLYAMSEtjKrFeFEQN8JwK',
    alt: 'Creme logo',
    top: 3.1, left: 10.9, animClass: 'float-logo-a', delay: 3.2, duration: 6.8,
  },
  {
    src: 'https://mobbin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcosmos.45db1f27.webp&w=1920&q=75&dpl=dpl_26NJBPpDLYAMSEtjKrFeFEQN8JwK',
    alt: 'Cosmos logo',
    top: 20.0, left: 65.6, animClass: 'float-logo-b', delay: 1.9, duration: 9.0,
  },
  {
    src: 'https://mobbin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmailchimp.847b7b4b.webp&w=1920&q=75&dpl=dpl_26NJBPpDLYAMSEtjKrFeFEQN8JwK',
    alt: 'Mailchimp logo',
    top: 42.3, left: 15.6, animClass: 'float-logo-c', delay: 0.4, duration: 7.5,
  },
  {
    src: 'https://mobbin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fairbnb.b34b1209.webp&w=1920&q=75&dpl=dpl_26NJBPpDLYAMSEtjKrFeFEQN8JwK',
    alt: 'Airbnb logo',
    top: 45.7, left: 77.1, animClass: 'float-logo-d', delay: 2.7, duration: 8.4,
  },
  {
    src: 'https://mobbin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fretro.754d946a.webp&w=1920&q=75&dpl=dpl_26NJBPpDLYAMSEtjKrFeFEQN8JwK',
    alt: 'Retro logo',
    top: 66.6, left: 0, animClass: 'float-logo-a', delay: 1.1, duration: 6.2,
  },
  {
    src: 'https://mobbin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftwitch.02a3a8cc.webp&w=1920&q=75&dpl=dpl_26NJBPpDLYAMSEtjKrFeFEQN8JwK',
    alt: 'Twitch logo',
    top: 85.7, left: 22.6, animClass: 'float-logo-b', delay: 3.8, duration: 7.0,
  },
  {
    src: 'https://mobbin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwise.da9d8274.webp&w=1920&q=75&dpl=dpl_26NJBPpDLYAMSEtjKrFeFEQN8JwK',
    alt: 'Wise logo',
    top: 84.3, left: 48.0, animClass: 'float-logo-c', delay: 0.6, duration: 8.8,
  },
  {
    src: 'https://mobbin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fappletv.fb364562.webp&w=1920&q=75&dpl=dpl_26NJBPpDLYAMSEtjKrFeFEQN8JwK',
    alt: 'Apple TV logo',
    top: 66.6, left: 93.7, animClass: 'float-logo-d', delay: 2.0, duration: 7.3,
  },
]

export default function FloatingLogosStats() {
  return (
    <section className="sticky top-0 grid h-screen place-items-center overflow-hidden px-5 md:px-24 xl:px-20">
      {/* Floating logos layer — pointer-events-none so it never blocks scroll/clicks */}
      <div className="pointer-events-none absolute grid place-items-center inset-y-16 md:inset-y-20 xl:inset-y-[min(7.5rem,10%)] inset-x-5 md:inset-x-6 xl:inset-x-20">
        <div className="relative w-full max-w-screen-2xl aspect-[0.57] md:aspect-[1.02] xl:aspect-[1.82]">
          {logos.map((logo, i) => (
            <div
              key={i}
              className={`absolute ${logo.animClass}`}
              style={{
                top: `${logo.top}%`,
                left: `${logo.left}%`,
                animationDelay: `${logo.delay}s`,
                animationDuration: `${logo.duration}s`,
              }}
            >
              <div className="relative w-10 h-10 md:w-20 md:h-20 shrink-0 overflow-hidden rounded-xl md:rounded-3xl ring-1 ring-white/10 shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover"
                  src={logo.src}
                  alt={logo.alt}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Central text content */}
      <div className="relative z-10">
        <h2 className="grid place-items-center gap-y-4">
          <span className="text-xl md:text-2xl font-semibold text-slate-400">
            A growing library of
          </span>
          <div className="grid gap-y-1 md:gap-y-3">
            <div className="whitespace-nowrap text-center text-[clamp(2rem,5.5vw,5rem)] font-bold tracking-tight leading-none">
              1,150 apps
            </div>
            <div className="whitespace-nowrap text-center text-[clamp(2rem,5.5vw,5rem)] font-bold tracking-tight leading-none">
              603,300 screens
            </div>
            <div className="whitespace-nowrap text-center text-[clamp(2rem,5.5vw,5rem)] font-bold tracking-tight leading-none">
              321,100 flows
            </div>
          </div>
        </h2>
      </div>
    </section>
  )
}