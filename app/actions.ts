"use server";

export interface ContactFormState {
  ok: boolean;
  message: string;
}

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || name.length < 2) {
    return { ok: false, message: "אנא הזינו שם מלא" };
  }
  if (!phone || phone.replace(/\D/g, "").length < 9) {
    return { ok: false, message: "מספר טלפון לא תקין" };
  }
  if (!message || message.length < 5) {
    return { ok: false, message: "אנא כתבו בקצרה במה נוכל לעזור" };
  }

  // TODO: בעתיד — שילוב עם שירות מייל (Resend / Mailtrap) או שמירה ב-DB.
  // לעת עתה מודפס ללוג של Vercel (Functions logs) — מספיק לבדיקות ראשונות.
  console.log("[lian-gardens] contact submission", { name, phone, message });

  return {
    ok: true,
    message: "הפנייה התקבלה. נחזור אליכם בקרוב.",
  };
}
