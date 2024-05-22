"use client";
import CardExam from "@/components/CardExam";
import { FilterAlt } from "@mui/icons-material";
import { Box, Grid, IconButton, TextField } from "@mui/material";
import Link from "next/link";

const AllExams = [
    {
        label: "Kiểm tra toán 15 phút",
        image: "https://toanmath.com/wp-content/uploads/2022/12/sach-giao-khoa-toan-11-tap-1-ket-noi-tri-thuc-voi-cuoc-song.png",
        day: "15 tháng 5 2024",
        link: "toan-15p-2024",
    },
    {
        label: "Kiểm tra sử 15 phút",
        image: "https://product.hstatic.net/200000343833/product/bia_shs__page_29_b256d223092c4ffe996c619adfaf2184_master.jpg",
        day: "20 tháng 5 2024",
        link: "su-15p-2024",
    },
];

const Exam: React.FC = () => {
    return (
        <main className="mt-16 flex items-center justify-center flex-col">
            <Box className="flex">
                <h1 className="text-[1.8em]">Các bài tập</h1>
            </Box>
            <Grid
                container
                rowSpacing={2}
                columnSpacing={2}
                columns={4}
                className="flex justify-center items-center mt-2"
            >
                {AllExams.map((item, key) => (
                    <Link href={`/exam/${item.link}`} key={key}>
                        <CardExam
                            title={item.label}
                            image={item.image}
                            day={item.day}
                        />
                    </Link>
                ))}
            </Grid>
        </main>
    );
};

export default Exam;
