"use client";
import { useParams } from "next/navigation";

const IdPage = () => {
    const params: { id: string } = useParams();
    return (
        <main className="mt-16">
            {params.id === "toan-15p-2024" ? (
                <iframe
                    width="100%"
                    height="900"
                    src="https://azota.vn/de-thi/initpd"
                    title="Kiểm tra toán 15 phút PHƯƠNG TRÌNH sin x = m.docx"
                    allow="accelerometer;autoplay;clipboard-write;encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            ) : (
                <iframe
                    width="100%"
                    height="900"
                    src="https://azota.vn/de-thi/wxyzfh"
                    title="Bài tập sử 15 phút"
                    allow="accelerometer;autoplay;clipboard-write;encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
            )}
        </main>
    );
};
export default IdPage;
