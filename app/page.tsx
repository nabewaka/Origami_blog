import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <article>
      {/* Markdown本文 */}
      <div className="bg-white p-8 rounded-lg prose prose-lg max-w-none mb-3"
        style={{ borderRadius: "var(--radius-lg)" }}
      >
        <h2 className=" mb-3">サイトについて</h2>
        <h3>
          こんにちは、マナベと申します。サイトを訪れて下さり、ありがとうございます。
          主に私の「折り紙」についての記録･発信を行うことを目的にしたサイトです。
          創作した作品については一つずつ多かれ少なかれ、文章として残そうと思います。
          技術中心と言うよりかは、「なんでこの作品を作ろうと思ったのか」や「どうやって作り始めたか」が
          中心になると思います。また、折り図について言及のあるものもありますが、販売については準備中です(m(__)m)。
        </h3>
      </div>

      <div className="bg-white p-8 rounded-lg prose prose-lg max-w-none mb-3"
        style={{ borderRadius: "var(--radius-lg)" }}
      >
        <h2 className=" mb-3">プロフィール</h2>
        <h3>
          眞鍋和奏(Manabe Wakana)。
        </h3>
        <h3 className=" mb-3">
          現在、大学4回生。高校生までは、細々と1人で折り紙をしていました。
          大学生になり、京都大学を拠点に活動する折り紙サークル「いまじろ～」に所属し、先輩方や同級生、仲間に恵まれ、創作を少しずつ始めるようになりました。折り図も書けるようになりました。たまにどこかで販売しています。
        </h3>
        <h3 className=" mb-3">
          SNS↓(ご連絡もここまで)
        </h3>
        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <Link href="https://www.instagram.com/nabe_oriori/">
            <button
              className="bg-blue text-white font-bold px-6 py-2 hover:bg-blue-dark transition-colors"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              Instagram
            </button>
          </Link>

          <Link href="https://x.com/nabe_oriori">
            <button
              className="bg-blue text-white font-bold px-6 py-2 hover:bg-blue-dark transition-colors"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              X
            </button>
          </Link>

          <Link href="https://www.instagram.com/imagiro_kyoto/">
            <button
              className="bg-blue text-white font-bold px-6 py-2 hover:bg-blue-dark transition-colors"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              いまじろ～のInstagram
            </button>
          </Link>

          <Link href="https://x.com/KUOCimagiro">
            <button
              className="bg-blue text-white font-bold px-6 py-2 hover:bg-blue-dark transition-colors"
              style={{ borderRadius: "var(--radius-lg)" }}
            >
              いまじろ～のX
            </button>
          </Link>
        </div>



      </div>

      <div className="bg-white p-8 rounded-lg prose prose-lg max-w-none mb-3"
        style={{ borderRadius: "var(--radius-lg)" }}
      >
        <h2 className=" mb-3">作品一覧について</h2>
        <h3 className=" mb-3">
          主に創作作品について、作品の記録です。
          カードをクリックすると、その作品に関する作品説明の記事を閲覧できます。
        </h3>
        <Link href="/works">
          <button
            className="bg-blue text-white font-bold px-6 py-2 hover:bg-blue-dark transition-colors"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            作品一覧へ
          </button>
        </Link>

      </div>

      <div className="bg-white p-8 rounded-lg prose prose-lg max-w-none mb-3"
        style={{ borderRadius: "var(--radius-lg)" }}
      >
        <h2 className=" mb-3">つぶやきについて</h2>
        <h3 className=" mb-3">
          主にこのページのことや、折り紙のイベントについての記録をする予定で、気ままに書くつもりです。
          カードをクリックすると、表題の記事を閲覧できます。
        </h3>
        <Link href="/tsubuyaki">
          <button
            className="bg-blue text-white font-bold px-6 py-2 hover:bg-blue-dark transition-colors"
            style={{ borderRadius: "var(--radius-lg)" }}
          >
            つぶやきへ
          </button>
        </Link>

      </div>

    </article>
  );
}