import type { MetaFunction } from "@remix-run/node";
// import { Link } from "@remix-run/react";

import { Header } from "~/components/Header";
// import { useOptionalUser } from "~/utils";

export const meta: MetaFunction = () => [{ title: "Questify" }];

export default function Index() {
  // const user = useOptionalUser();
  return (
    <div>
      <Header />
      <main>
        <section className="h-[calc(100vh-64px)] flex flex-col justify-center items-center columns-auto p-32">
          <div>
            <h1 className="font-led [text-shadow:_7px_7px_5px_rgb(202_138_4)] uppercase text-8xl text-center leading-tight tracking-wider mb-12 text-yellow-500 animate-bounce">
              Gamify your life
            </h1>
          </div>
        </section>
        {/*
        <div>
          {user && <Link to="/tasks">View tasks for {user.email}</Link>}
        </div>
        */}
      </main>
    </div>
  );
}
