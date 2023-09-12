import Link from "next/link";
import Image from "next/image";

import botOnlineStatus from "../utils/images/botStatus.svg";

const Showcase = () => {
  return (
    <>
      <main className="showcase">
        <h1 className="showcase-header h-color">Reminder</h1>
        <h2 className="showcase-header-text h-color">
          The only guilded bot you need!
        </h2>
        <p className="showcase-para p-color">
          Reminder is a guilded bot integrated with features able to remind you directly through guilded!
        </p>
        <Image
          src={botOnlineStatus}
          width={40}
          height={40}
          alt="online-status"
          className="onlineStatus"
        />{" "}
        <span className="p-color">Bot is online!</span>
        <div className="showcase-btn">
          <button className="btn">
            <Link className="h-color no-decoration" href="#">
              Invite now!
            </Link>
          </button>

          <button className="btn">
            <Link className="h-color no-decoration" href="#">
              Join server!
            </Link>
          </button>
        </div>
      </main>
    </>
  );
};

export default Showcase;
