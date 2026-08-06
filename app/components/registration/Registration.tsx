"use client";

import { useState } from "react";
import {
  User,
  Briefcase,
  Building2,
  CheckCircle2,
  Loader2,
} from "lucide-react";

import { useLanguage } from "@/app/components/context/LanguageContext";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz7vO-HDhbIGoHMIz49";

export default function Registration() {
  const { t } = useLanguage();

  const [form, setForm] = useState({
    fullname: "",
    position: "",
    department: "",
    attendance: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (
      !form.fullname ||
      !form.position ||
      !form.department ||
      !form.attendance
    ) {
      alert(t.registration.validation);
      return;
    }

    try {
      setLoading(true);

      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      setSuccess(true);

      setForm({
        fullname: "",
        position: "",
        department: "",
        attendance: "",
      });
    } catch {
      alert(t.registration.error);
    } finally {
      setLoading(false);
    }
  }

  const fields = [
    {
      name: "fullname",
      icon: User,
      label: t.registration.fullname,
      placeholder: t.registration.fullnamePlaceholder,
    },
    {
      name: "position",
      icon: Briefcase,
      label: t.registration.position,
      placeholder: t.registration.positionPlaceholder,
    },
    {
      name: "department",
      icon: Building2,
      label: t.registration.department,
      placeholder: t.registration.departmentPlaceholder,
    },
  ];

  return (
    <section id="registration" className="py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl">

          <div className="mb-14 text-center">

            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm uppercase tracking-[4px] text-blue-400">
              {t.registration.badge}
            </span>

            <h2 className="mt-8 text-5xl font-black uppercase">
              {t.registration.title}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
              {t.registration.subtitle}
            </p>

          </div>

          {success ? (
            <div className="rounded-3xl border border-blue-500/20 bg-white/5 p-16 text-center backdrop-blur-xl">

              <CheckCircle2
                size={90}
                className="mx-auto text-blue-500"
              />

              <h3 className="mt-8 text-4xl font-black">
                {t.registration.successTitle}
              </h3>

              <p className="mt-6 whitespace-pre-line text-lg leading-8 text-white/70">
                {t.registration.successText}
              </p>

            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
            >
              <div className="space-y-8">

                {fields.map((field) => {
                  const Icon = field.icon;

                  return (
                    <div key={field.name}>

                      <label className="mb-3 flex items-center gap-3 text-sm uppercase tracking-[3px] text-white/60">

                        <Icon
                          size={18}
                          className="text-blue-400"
                        />

                        {field.label}

                      </label>

                      <input
                        type="text"
                        name={field.name}
                        value={form[field.name as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={field.placeholder}
                        className="w-full rounded-2xl border border-white/10 bg-[#0E1117] px-6 py-5 text-lg outline-none transition focus:border-blue-500"
                      />

                    </div>
                  );
                })}

                <div>

                  <label className="mb-4 flex items-center gap-3 text-sm uppercase tracking-[3px] text-white/60">

                    {t.registration.attendanceTitle}

                  </label>

                  <div className="space-y-4">

                    <label
                      className={`flex cursor-pointer items-start gap-4 rounded-2xl border p-5 transition-all ${form.attendance === "confirm"
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-white/10 bg-[#0E1117] hover:border-blue-500"
                        }`}
                    >

                      <input
                        type="radio"
                        name="attendance"
                        value="Сможет"
                        checked={form.attendance === "Сможет"}
                        onChange={handleChange}
                        className="mt-1 h-5 w-5 accent-blue-500"
                      />

                      <span className="leading-7">
                        {t.registration.attendanceConfirm}
                      </span>

                    </label>

                    <label
                      className={`flex cursor-pointer items-start gap-4 rounded-2xl border p-5 transition-all ${form.attendance === "decline"
                        ? "border-blue-500 bg-blue-500/10"
                        : "border-white/10 bg-[#0E1117] hover:border-blue-500"
                        }`}
                    >

                      <input
                        type="radio"
                        name="attendance"
                        value="Не сможет"
                        checked={form.attendance === "Не сможет"}
                        onChange={handleChange}
                        className="mt-1 h-5 w-5 accent-blue-500"
                      />

                      <span className="leading-7">
                        {t.registration.attendanceDecline}
                      </span>

                    </label>

                  </div>

                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 flex w-full items-center justify-center rounded-2xl bg-blue-600 py-5 text-lg font-bold transition hover:bg-blue-500 disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2
                        size={22}
                        className="mr-3 animate-spin"
                      />
                      {t.registration.loading}
                    </>
                  ) : (
                    t.registration.button
                  )}
                </button>

              </div>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}