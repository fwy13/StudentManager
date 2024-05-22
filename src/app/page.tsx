"use client";
import Extension from "@/components/Extension";
import Chart from "@/components/Chart";
import News from "@/components/News";
export default function Home() {
  return (
    <main className="mt-16 flex justify-center items-center flex-col gap-4">
      <Extension />
      <Chart />
      <News />
    </main>
  );
}
