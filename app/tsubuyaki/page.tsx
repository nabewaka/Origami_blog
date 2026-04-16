import WorkCard from "@/components/WorkCard";
import tsubuyakiData from "@/content/tsubuyaki.json";

export default function TsubuyakiPage() {
    return (
        <div>
            <h2
                className="text-black font-bold mb-8"
                style={{ fontSize: "var(--text-3xl)" }}
            >
                つぶやき
            </h2>

            <p
                className="text-black mb-6"
                style={{ fontSize: "var(--text-x1)" }}
            >
                カードを押すと、記事を閲覧できます。

            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {tsubuyakiData.map((item) => (
                    <WorkCard
                        key={item.slug}
                        slug={item.slug}
                        title={item.title}
                        description={item.description}
                        about={item.about}
                        thumbnail={item.thumbnail}
                        create_date={item.create_date}
                        basePath="/tsubuyaki"
                    />
                ))}
            </div>
        </div>
    );
}