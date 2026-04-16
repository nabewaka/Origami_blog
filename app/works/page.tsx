import WorkCard from "@/components/WorkCard";
import worksData from "@/content/works.json";

export default function WorksPage() {
    return (
        <div>
            {/* ページタイトル */}
            <h2
                className="text-black font-bold mb-6"
                style={{ fontSize: "var(--text-3xl)" }}
            >
                作品一覧
            </h2>

            <p
                className="text-black mb-6"
                style={{ fontSize: "var(--text-x1)" }}
            >
                作品カードを押すと、記事を閲覧できます。

            </p>


            {/* グリッド：スマホ1列、タブレット2列、PC3列 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {worksData.map((work) => (
                    <WorkCard
                        key={work.slug}
                        slug={work.slug}
                        title={work.title}
                        description={work.description}
                        thumbnail={work.thumbnail}
                        create_date={work.create_date}
                    />
                ))}
            </div>
        </div >
    );
}