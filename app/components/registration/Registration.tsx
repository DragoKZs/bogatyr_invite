"use client";

import { useState } from "react";
import { User, Briefcase, Building2, CheckCircle2, Loader2 } from "lucide-react";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz7vO-HDhbIGoHMIz49gHTS6W6AlCiupRdTV0x6w8MioP2ydgLWK9wTl_3LFgpmrOZuTg/exec";

export default function Registration() {
  const [form, setForm] = useState({
    fullname: "",
    position: "",
    department: "",
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
      !form.department
    ) {
      alert("Заполните все поля.");
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
      });

    } catch (err) {
      alert("Ошибка отправки.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="registration"
      className="py-28"
    >
      <div className="container">

        <div className="mx-auto max-w-3xl">

          <div className="mb-14 text-center">

            <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm uppercase tracking-[4px] text-blue-400">
              Регистрация
            </span>

            <h2 className="mt-8 text-5xl font-black uppercase">
              Подтвердите участие
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
              Для участия в праздничном мероприятии
              заполните небольшую форму ниже.
            </p>

          </div>

          {success ? (

            <div className="rounded-3xl border border-blue-500/20 bg-white/5 p-16 text-center backdrop-blur-xl">

              <CheckCircle2
                size={90}
                className="mx-auto text-blue-500"
              />

              <h3 className="mt-8 text-4xl font-black">
                Спасибо!
              </h3>

              <p className="mt-6 text-lg leading-8 text-white/70">
                Ваша заявка успешно отправлена.
                <br />
                Будем рады видеть Вас
                <br />
                на празднике!
              </p>

            </div>

          ) : (

            <form
              onSubmit={handleSubmit}
              className="rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
            >

              <div className="space-y-8">

                <div>

                  <label className="mb-3 flex items-center gap-3 text-sm uppercase tracking-[3px] text-white/60">

                    <User
                      size={18}
                      className="text-blue-400"
                    />

                    ФИО

                  </label>

                  <input
                    type="text"
                    name="fullname"
                    value={form.fullname}
                    onChange={handleChange}
                    placeholder="Введите ФИО"
                    className="w-full rounded-2xl border border-white/10 bg-[#0E1117] px-6 py-5 text-lg outline-none transition focus:border-blue-500"
                  />

                </div>

                <div>

                  <label className="mb-3 flex items-center gap-3 text-sm uppercase tracking-[3px] text-white/60">

                    <Briefcase
                      size={18}
                      className="text-blue-400"
                    />

                    Должность

                  </label>

                  <input
                    type="text"
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    placeholder="Введите должность"
                    className="w-full rounded-2xl border border-white/10 bg-[#0E1117] px-6 py-5 text-lg outline-none transition focus:border-blue-500"
                  />

                </div>

                <div>

                  <label className="mb-3 flex items-center gap-3 text-sm uppercase tracking-[3px] text-white/60">

                    <Building2
                      size={18}
                      className="text-blue-400"
                    />

                    Подразделение

                  </label>

                  <input
                    type="text"
                    name="department"
                    value={form.department}
                    onChange={handleChange}
                    placeholder="Введите подразделение"
                    className="w-full rounded-2xl border border-white/10 bg-[#0E1117] px-6 py-5 text-lg outline-none transition focus:border-blue-500"
                  />

                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 flex w-full items-center justify-center rounded-2xl bg-blue-600 py-5 text-lg font-bold transition-all duration-300 hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading ? (
                    <>
                      <Loader2
                        size={22}
                        className="mr-3 animate-spin"
                      />
                      Отправка...
                    </>
                  ) : (
                    "Подтвердите участие"
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