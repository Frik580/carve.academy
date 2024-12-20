import { AboutUs } from "@/widgets/AboutUs/AboutUs";
import { Courses } from "@/widgets/Courses/Courses";
import { TopNews } from "@/widgets/TopNews/TopNews";
import { Suspense } from "react";

export default function HomePage() {
    return (
        <main className="main">
        <Suspense fallback={<p>Loading...</p>}>
            <TopNews />
            <AboutUs />
            <Courses />
        </Suspense>
    </main>
    );
}

