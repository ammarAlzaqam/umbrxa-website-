import Header from "../components/Header";
import Services from "../components/Services";

export default function Home() {
  return (
    <main>
      <Header />

      {/*//! Our Services */}
      <div className="pt-5 px-10">
        <Services />
      </div>

      {/*//! Our  */}
      <div className="pt-15">
        {/* <Portfolio /> */}
      </div>
    </main>
  );
}
