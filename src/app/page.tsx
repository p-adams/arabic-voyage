import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <h1>Arabic Voyage</h1>
        <div>
          <h4>Learning Modules</h4>
          <ul>
            <li>Alphabet</li>
            <li>Vocabulary Builder</li>
            <li>Grammar Lessons</li>
            <li>More coming soon...</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
