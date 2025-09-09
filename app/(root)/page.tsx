import Header from "../components/Header";
import Services from "../components/Services";

export default function Home() {
  return (
    <main>
      <Header />

      {/*//! Our Services */}
      <div className="overflow-hidden p-5 sm:px-10">
        <Services />
      </div>

      {/*//! Our  */}
      <div className="pt-15">
        {/* <Portfolio /> */}
      </div>
    </main>
  );
}
