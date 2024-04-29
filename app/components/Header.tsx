import { Link } from "@remix-run/react";

import { QuestifyLogo } from "~/components/QuestifyLogo";

export const Header = () => (
  <nav className="pt-6 px-6">
    <ul className="flex items-center text-sm gap-x-8 font-semibold uppercase">
      <li className="block flex-grow text-lg">
        <Link
          to="/home"
          className="flex items-center text-3xl font-bold font-alegreya"
        >
          <span>Questify</span>
          <QuestifyLogo className="fill-yellow-500 h-10 w-10 ml-1" />
        </Link>
      </li>
      <li className="block">
        <Link to="/tasks">Tasks</Link>
      </li>
      <li className="block">
        <Link to="/quests">Quests</Link>
      </li>
      <li className="block">
        <Link to="/history">History</Link>
      </li>
      {/*
      <li className="block">
        <Link to="/join">Sign Up</Link>
      </li>
      <li className="block">
        <Link to="/login">Log In</Link>
      </li>
      */}
    </ul>
  </nav>
);
