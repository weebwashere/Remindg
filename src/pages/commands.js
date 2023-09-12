import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Commands() {
  return (
    <>
      <Head>
        <title>Commands | Reminder</title>
        <meta name="description" content="commands page for reminder's website!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="about-section">
        <nav className="accordion arrows" id="commands">
          <header className="box">
            <label htmlFor="acc-close" className="box-title h-color">
              Commands
            </label>
          </header>
          <input type="radio" name="accordion" id="cb1" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb1">
              Utility ⚙️
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>re about</kbd> -{" "}
                  <span className="p-color">shows info about the bot.</span>
                </li>
                <li>
                  <kbd>re help</kbd> -{" "}
                  <span className="p-color">gets all commands from the bot.</span>
                </li>
                <li>
                  <kbd>re serverinfo</kbd> -{" "}
                  <span className="p-color">gets info on your current server.</span>
                </li>
                <li>
                  <kbd>re userinfo</kbd> -{" "}
                  <span className="p-color">gets info on a current user.</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="cb2" />
          <section className="box">
            <label className="box-title p-color" htmlFor="cb2">
              Reminding 🕐
            </label>
            <label className="box-close" htmlFor="acc-close"></label>
            <div className="box-content p-color">
              <ul>
                <li>
                  <kbd>re create</kbd> -{" "}
                  <span className="p-color">create/schedule a reminder.</span>
                </li>
                <li>
                  <kbd>re remove</kbd> -{" "}
                  <span className="p-color">remove a reminder.</span>
                </li>
                <li>
                  <kbd>re active</kbd> -{" "}
                  <span className="p-color">view your active reminders.</span>
                </li>
              </ul>
            </div>
          </section>
          <input type="radio" name="accordion" id="acc-close" />
        </nav>
      </section>
      <Footer />
    </>
  );
}
