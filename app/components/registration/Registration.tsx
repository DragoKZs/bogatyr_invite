"use client";

import { useState } from "react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";
import SectionTitle from "../ui/SectionTitle";

const API_URL =
  "https://script.google.com/macros/s/AKfycbz7vO-HDhbIGoHMIz49gHTS6W6AlCiupRdTV0x6w8MioP2ydgLWK9wTl_3LFgpmrOZuTg/exec";

export default function Registration() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    position: "",
    department: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(form),
      });

      setSuccess(true);

      setForm({
        fullName: "",
        position: "",
        department: "",
      });
    } catch (err) {
      alert("Ошибка отправки");
    }

    setLoading(false);
  }

  if (success) {
    return (
      <section className="py-32">
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-16 text-center">
            <div className="text-6xl">✅</div>

            <h2 className="mt-6 text-4xl font-black">
              Спасибо!
            </h2>

            <p className="mt-6 text-white/70">
              Ваша заявка успешно отправлена.
              <br />
              До встречи на мероприятии!
            </p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="registration" className="py-28 bg-[#111418]">
      <Container>

        <Reveal>

          <SectionTitle
            overline="Регистрация"
            title="Подайте заявку"
            text="Заполните три поля и нажмите кнопку."
            center
          />

        </Reveal>

        <Reveal delay={0.2}>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-16 max-w-2xl rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
          >

            <input
              placeholder="ФИО"
              value={form.fullName}
              onChange={(e) =>
                setForm({
                  ...form,
                  fullName: e.target.value,
                })
              }
              className="input mb-8"
              required
            />

            <input
              placeholder="Должность"
              value={form.position}
              onChange={(e) =>
                setForm({
                  ...form,
                  position: e.target.value,
                })
              }
              className="input mb-8"
              required
            />

            <input
              placeholder="Подразделение"
              value={form.department}
              onChange={(e) =>
                setForm({
                  ...form,
                  department: e.target.value,
                })
              }
              className="mb-8 w-full rounded-xl border border-white/10 bg-black/20 px-5 py-4 outline-none focus:border-yellow-500"
              required
            />

            <button
              disabled={loading}
              className="w-full rounded-xl bg-yellow-500 py-4 text-lg font-bold text-black transition hover:bg-yellow-400 disabled:opacity-60"
            >
              {loading ? "Отправляем..." : "Подать заявку"}
            </button>

          </form>

        </Reveal>

      </Container>
    </section>
  );
}