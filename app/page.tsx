export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          For Independent Podcasters
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Find sponsors that actually<br />
          <span className="text-[#58a6ff]">fit your audience</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Paste your RSS feed. Get AI-scored sponsor matches ranked by audience fit — not just download count. Stop cold-emailing brands that don't convert.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Matching — $15/mo
        </a>
        <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. Works with any podcast hosting platform.</p>
      </section>

      {/* How it works */}
      <section className="mb-24 grid sm:grid-cols-3 gap-6 text-center">
        {[
          { step: '1', title: 'Connect your feed', desc: 'Paste your RSS URL. We pull episode data and listener demographics automatically.' },
          { step: '2', title: 'AI scores sponsors', desc: 'Our model compares your niche, audience age, and engagement against 500+ sponsor profiles.' },
          { step: '3', title: 'Get ranked matches', desc: 'Receive a prioritized list with fit scores, typical CPM rates, and outreach templates.' }
        ].map(({ step, title, desc }) => (
          <div key={step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="w-8 h-8 rounded-full bg-[#58a6ff]/10 text-[#58a6ff] font-bold text-sm flex items-center justify-center mx-auto mb-3">{step}</div>
            <h3 className="text-white font-semibold mb-2">{title}</h3>
            <p className="text-sm text-[#8b949e]">{desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-24" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-10">Simple pricing</h2>
        <div className="max-w-sm mx-auto bg-[#161b22] border border-[#58a6ff]/40 rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-4">Pro</p>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Unlimited RSS feed analysis',
              'AI sponsor-fit scoring',
              '500+ sponsor database',
              'Outreach email templates',
              'Monthly match refresh',
              'Email support'
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] mt-3">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: 'What podcast size do I need?',
              a: 'PodcastMatch works best for shows with 1,000+ downloads per episode. Smaller shows may see fewer sponsor matches since most brands set minimum audience thresholds.'
            },
            {
              q: 'How does the AI matching work?',
              a: 'We analyze your episode topics, audience demographics from your hosting platform, and engagement signals, then score each sponsor in our database on category fit, audience overlap, and typical deal size.'
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes. Cancel from your Lemon Squeezy dashboard at any time. You keep access until the end of your billing period — no questions asked.'
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} PodcastMatch. All rights reserved.
      </footer>
    </main>
  )
}
