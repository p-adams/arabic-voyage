import { arabicAlphabet } from "@/data";
import "./page.css";

function AlphabetModule() {
  return (
    <section className="alphabet-module">
      <h1>Alphabet Module</h1>
      <div className="alphabet-cards">
        {arabicAlphabet.map((ch, i) => (
          <div key={ch.arabicChar} className="alphabet-card">
            <div>{ch.arabicChar}</div>
            <div>{ch.letterName}</div>
            <div>{ch.transliteration}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AlphabetModule;
