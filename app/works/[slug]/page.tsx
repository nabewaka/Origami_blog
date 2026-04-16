import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import worksData from "@/content/works.json";

type Props = {
    params: Promise<{ slug: string }>;
};

const components = {
    img: (props: any) => (
        <span className="relative overflow-hidden my-4 mx-auto"
            style={{
                borderRadius: "var(--radius-lg)",
                width: "300px",
                height: "300px",
                display: "block",
            }}
        >
            <Image src={props.src} alt={props.alt} fill className="object-cover" />
        </span>
    ),
    a: (props: any) => (
        <a
            {...props}
            className="inline-block bg-blue text-white font-bold px-4 py-2 hover:bg-blue-dark transition-colors"
            style={{ borderRadius: "var(--radius-md)" }}
        />
    ),
}
export async function generateStaticParams() {
    return worksData.map((work) => ({ slug: work.slug }));
}

export default async function WorkDetailPage({ params }: Props) {
    const { slug } = await params;

    // Markdownファイルを読み込む
    const filePath = path.join(process.cwd(), "content/articles", `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content } = matter(fileContent);

    return (
        <article>
            <div className="bg-white p-8 rounded-lg prose prose-lg max-w-none "
                style={{ borderRadius: "var(--radius-lg)" }}
            >
                <MDXRemote source={content} components={components} />
            </div>
        </article>
    );
}