import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Send } from "lucide-react";

const schema = z
  .object({
    name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
    phone: z
      .string()
      .trim()
      .max(10)
      .optional()
      .or(z.literal("")),
    email: z
      .string()
      .trim()
      .max(255)
      .optional()
      .or(z.literal("")),
    preferredContact: z.enum(["phone", "whatsapp", "email"]),
    message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
  })
  .superRefine((val, ctx) => {
    const hasPhone = !!val.phone && val.phone.length > 0;
    const hasEmail = !!val.email && val.email.length > 0;

    if (!hasPhone && !hasEmail) {
      const msg = "Please provide either your phone number or email so we can contact you back.";
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["phone"], message: msg });
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["email"], message: msg });
      return;
    }
    if (hasPhone && !/^[6-9]\d{9}$/.test(val.phone!)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["phone"],
        message: "Enter a valid 10-digit Indian mobile number",
      });
    }
    if (hasEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.email!)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["email"],
        message: "Enter a valid email address",
      });
    }
  });

type FormValues = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormValues, string>>;

export function ContactForm() {
  const [values, setValues] = useState<FormValues>({
    name: "",
    phone: "",
    email: "",
    preferredContact: "phone",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  const onChange =
    (k: keyof FormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((v) => ({ ...v, [k]: e.target.value }));
    };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof Errors;
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    toast.success("Thanks! Your inquiry has been received. We'll contact you shortly.");
    setValues({ name: "", phone: "", email: "", preferredContact: "phone", message: "" });
  };

  const inputCls =
    "w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm shadow-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition";

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-4">
      <div className="grid gap-1.5">
        <label className="text-sm font-medium text-foreground">
          Full Name <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          className={inputCls}
          placeholder="Your name"
          value={values.name}
          onChange={onChange("name")}
          maxLength={100}
        />
        {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <label className="text-sm font-medium text-foreground">Phone</label>
          <input
            type="tel"
            className={inputCls}
            placeholder="10-digit mobile"
            value={values.phone}
            onChange={onChange("phone")}
            maxLength={10}
          />
          <p className="text-xs text-muted-foreground">
            Provide either phone or email. One contact method is required.
          </p>
          {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
        </div>
        <div className="grid gap-1.5">
          <label className="text-sm font-medium text-foreground">Email</label>
          <input
            type="email"
            className={inputCls}
            placeholder="you@example.com"
            value={values.email}
            onChange={onChange("email")}
            maxLength={255}
          />
          <p className="text-xs text-muted-foreground">
            Provide either phone or email. One contact method is required.
          </p>
          {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
        </div>
      </div>

      <div className="grid gap-1.5">
        <label className="text-sm font-medium text-foreground">Preferred Contact Method</label>
        <div className="flex flex-wrap gap-4 pt-1">
          {(
            [
              { v: "phone", label: "Phone Call" },
              { v: "whatsapp", label: "WhatsApp" },
              { v: "email", label: "Email" },
            ] as const
          ).map((opt) => (
            <label key={opt.v} className="inline-flex items-center gap-2 text-sm cursor-pointer">
              <input
                type="radio"
                name="preferredContact"
                value={opt.v}
                checked={values.preferredContact === opt.v}
                onChange={onChange("preferredContact")}
                className="h-4 w-4 accent-primary"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </div>

      <div className="grid gap-1.5">
        <label className="text-sm font-medium text-foreground">
          Message <span className="text-destructive">*</span>
        </label>
        <textarea
          rows={5}
          className={inputCls}
          placeholder="Tell us which spare parts you're looking for…"
          value={values.message}
          onChange={onChange("message")}
          maxLength={1000}
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-hero px-6 py-3 text-sm font-semibold text-brand-foreground shadow-elevated hover:opacity-95 disabled:opacity-60 transition"
      >
        <Send className="h-4 w-4" />
        {submitting ? "Sending…" : "Send Inquiry"}
      </button>
    </form>
  );
}
