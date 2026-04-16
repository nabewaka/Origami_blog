import Image from "next/image";
import Link from "next/link";

type Props = {
    slug: string;
    title: string;
    description: string;
    about?: string;
    thumbnail: string;
    create_date: string;
    basePath?: string;
};

export default function WorkCard({ slug, title, description, about = "", thumbnail, create_date, basePath = "/works" }: Props) {
    return (
        <Link href={`${basePath}/${slug}`}>
            <div
                className={`${about === "homepage" ? "bg-yellow" : "bg-blue"} overflow-hidden hover:shadow-lg transition-shadow cursor-pointer`}
                style={{ borderRadius: "var(--radius-lg)" }}
            >
                {/* サムネイル画像 */}
                <div className="p-3">
                    <div
                        className="relative w-full aspect-square overflow-hidden"
                        style={{ borderRadius: "var(--radius-lg)" }}
                    >
                        <Image src={thumbnail} alt={title} fill className="object-cover" />
                    </div>
                </div>

                {/* テキスト */}
                <div className="p-4">
                    <h3
                        className="text-white font-bold mb-1"
                        style={{ fontSize: "var(--text-lg)" }}
                    >
                        {title}
                    </h3>
                    <p
                        className="text-white"
                        style={{ fontSize: "var(--text-sm)" }}
                    >
                        {basePath === "/works" && "創作 "}
                        {create_date}
                    </p>

                    <p
                        className="text-white"
                        style={{ fontSize: "var(--text-sm)" }}
                    >
                        {description}
                    </p>
                </div>

            </div>
        </Link>
    );
}