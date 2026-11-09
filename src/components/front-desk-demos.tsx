const demos = [
  {
    id: "after-hours",
    label: "01 / After hours",
    title: "From first call to booking link",
    description: "A new patient calls after closing. The assistant explains the clinic’s policy and asks permission to text the consult link.",
    transcript: [
      ["Virtual assistant", "Thanks for calling. How can I help?"],
      ["Caller", "Hi, I’m new. Do I need a consultation first?"],
      ["Virtual assistant", "For a first visit, we start with a consultation. Can I text you the booking link?"],
      ["Caller", "Yes, please."],
      ["Virtual assistant", "I’ve sent it. You can pick a time that works for you."],
    ],
    outcome: "The assistant sends a consult booking link.",
  },
  {
    id: "staff-handoff",
    label: "02 / Staff handoff",
    title: "When a question needs your team",
    description: "A caller asks if a treatment is right for them. The assistant captures their callback preference and passes the question to staff.",
    transcript: [
      ["Caller", "Can someone tell me whether I’m a good candidate for this treatment?"],
      ["Virtual assistant", "Your provider can help you with that. Would you like me to ask our team to call you back?"],
      ["Caller", "Yes. Tomorrow morning would be great."],
      ["Virtual assistant", "I’ll pass that along so our team knows what you’d like to discuss."],
    ],
    outcome: "The assistant routes the question and callback preference to clinic staff.",
  },
];

export function FrontDeskDemos() {
  return (
    <section id="demos" aria-labelledby="demo-heading" className="scroll-mt-16 border-b border-border bg-card">
      <div className="container-page py-14 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Listen to the front desk</p>
          <h2 id="demo-heading" className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">Two calls your team knows by heart</h2>
          <p className="mt-3 text-muted-foreground">
            Simulated med spa calls with synthetic voices. Press play to hear the assistant, or read the transcript.
          </p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {demos.map((demo) => (
            <article key={demo.id} className="min-w-0 overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
              <video
                aria-labelledby={`${demo.id}-title`}
                className="aspect-video w-full bg-[#261927]"
                controls
                playsInline
                preload="none"
                poster={`/demos/${demo.id}.webp`}
                width={960}
                height={540}
              >
                <source src={`/demos/${demo.id}.mp4`} type="video/mp4" />
                <track kind="captions" src={`/demos/${demo.id}.vtt`} srcLang="en" label="English" default />
                <a href={`/demos/${demo.id}.mp4`}>Open the demo video</a>
              </video>
              <div className="p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">{demo.label}</p>
                <h3 id={`${demo.id}-title`} className="mt-2 font-display text-2xl font-semibold tracking-tight">{demo.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{demo.description}</p>
                <details className="mt-4 border-t border-border pt-4 text-sm">
                  <summary className="cursor-pointer font-medium text-primary">Read transcript</summary>
                  <ol className="mt-3 space-y-2 text-muted-foreground">
                    {demo.transcript.map(([speaker, line]) => (
                      <li key={line}><span className="font-semibold text-foreground">{speaker}.</span> {line}</li>
                    ))}
                  </ol>
                  <p className="mt-3 font-medium">{demo.outcome}</p>
                </details>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs text-muted-foreground">
          Demo voices generated with <a className="underline underline-offset-2" href="https://huggingface.co/rhasspy/piper-voices/blob/v1.0.0/en/en_US/libritts_r/medium/MODEL_CARD">Piper and LibriTTS-R</a>.
          The voice dataset is licensed under <a className="underline underline-offset-2" href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>.
        </p>
      </div>
    </section>
  );
}
