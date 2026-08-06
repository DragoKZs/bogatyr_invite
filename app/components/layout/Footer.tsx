import Link from "next/link";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-8">
      <Container>

        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row">

          <Link
            href="/"
            className="text-xl font-black tracking-[4px]"
          >
            БОГАТЫРЬ КӨМІР
          </Link>

          <p className="text-sm text-white/50">
            © 2026 Форум «Богатырь Көмір». Все права защищены.
          </p>

        </div>

      </Container>
    </footer>
  );
}