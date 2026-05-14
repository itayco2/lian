"use client";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { submitContact, type ContactFormState } from "@/app/actions";
import { CONTACT, SITE } from "@/lib/content";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Phone, WhatsappLogo, EnvelopeSimple, MapPin } from "@phosphor-icons/react/dist/ssr";

const initialState: ContactFormState = { ok: false, message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-forest px-7 py-3.5 text-cream transition-all duration-500 ease-soft hover:bg-forest-deep active:scale-[0.98] disabled:opacity-60"
    >
      {pending ? "שולח..." : "שליחת פנייה"}
    </button>
  );
}

export function Contact() {
  const [state, action] = useActionState(submitContact, initialState);

  return (
    <section id="contact" className="relative py-32 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          {/* Left — copy + direct contact rails */}
          <div className="md:col-span-5">
            <Eyebrow>{CONTACT.eyebrow}</Eyebrow>
            <h2 className="display mt-6 text-4xl md:text-6xl text-espresso">
              {CONTACT.title}
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-espresso/75 max-w-md">
              {CONTACT.body}
            </p>

            <ul className="mt-10 space-y-3">
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/-/g, "")}`}
                  className="group flex items-center gap-4 rounded-2xl border border-forest/10 bg-cream-deep/40 p-4 transition-all duration-500 ease-soft hover:bg-cream hover:border-forest/30"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest text-cream">
                    <Phone size={18} weight="bold" />
                  </span>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-[0.2em] text-espresso/55">טלפון</div>
                    <div className="text-lg text-espresso" dir="ltr">{SITE.phoneDisplay}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-forest/10 bg-cream-deep/40 p-4 transition-all duration-500 ease-soft hover:bg-cream hover:border-forest/30"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-terracotta text-cream">
                    <WhatsappLogo size={20} weight="fill" />
                  </span>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-[0.2em] text-espresso/55">וואטסאפ</div>
                    <div className="text-lg text-espresso">שליחת הודעה מהירה</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-forest/10 bg-cream-deep/40 p-4 transition-all duration-500 ease-soft hover:bg-cream hover:border-forest/30"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-espresso text-cream">
                    <EnvelopeSimple size={18} weight="bold" />
                  </span>
                  <div className="flex-1">
                    <div className="text-xs uppercase tracking-[0.2em] text-espresso/55">מייל</div>
                    <div className="text-lg text-espresso" dir="ltr">{SITE.email}</div>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-4 rounded-2xl border border-forest/10 bg-cream-deep/40 p-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage text-cream">
                  <MapPin size={18} weight="bold" />
                </span>
                <div className="flex-1">
                  <div className="text-xs uppercase tracking-[0.2em] text-espresso/55">אזור שירות</div>
                  <div className="text-lg text-espresso">{SITE.serviceArea}</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Right — contact form */}
          <div className="md:col-span-7">
            <div className="bezel-outer">
              <div className="bezel-inner p-7 md:p-10">
                <form action={action} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-espresso/80">שם מלא</span>
                      <input
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        minLength={2}
                        className="w-full rounded-xl border border-forest/15 bg-cream px-4 py-3 text-espresso outline-none transition-all duration-300 placeholder:text-espresso/40 focus:border-forest focus:ring-2 focus:ring-forest/15"
                        placeholder="ישראל ישראלי"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-espresso/80">טלפון</span>
                      <input
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        required
                        dir="ltr"
                        className="w-full rounded-xl border border-forest/15 bg-cream px-4 py-3 text-espresso outline-none transition-all duration-300 placeholder:text-espresso/40 focus:border-forest focus:ring-2 focus:ring-forest/15"
                        placeholder="050-0000000"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-espresso/80">במה נוכל לעזור?</span>
                    <textarea
                      name="message"
                      required
                      minLength={5}
                      rows={5}
                      className="w-full resize-none rounded-xl border border-forest/15 bg-cream px-4 py-3 text-espresso outline-none transition-all duration-300 placeholder:text-espresso/40 focus:border-forest focus:ring-2 focus:ring-forest/15"
                      placeholder="מספר מילים על הפרויקט או הגינה שלכם..."
                    />
                  </label>

                  <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-espresso/55">
                      שולחים? נחזור אליכם תוך 24 שעות.
                    </p>
                    <SubmitButton />
                  </div>

                  {state.message && (
                    <div
                      role="status"
                      className={[
                        "mt-2 rounded-xl border px-4 py-3 text-sm",
                        state.ok
                          ? "border-forest/30 bg-forest/5 text-forest"
                          : "border-terracotta/40 bg-terracotta/10 text-terracotta",
                      ].join(" ")}
                    >
                      {state.message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
