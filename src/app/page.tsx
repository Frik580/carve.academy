import { TopNews } from "@/widgets/TopNews/TopNews";
import { Suspense } from "react";

export default function HomePage() {
    return (
        <main className="main">
        <Suspense fallback={<p>Loading...</p>}>
            <TopNews />
        </Suspense>
    </main>
    );
}

