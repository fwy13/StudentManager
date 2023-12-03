"use client";
import CardExam from "@/components/CardExam";
import { FilterAlt } from "@mui/icons-material";
import { Autocomplete, Box, Grid, IconButton, TextField } from "@mui/material";

const AllExams = [
  { label: "Kiem Tra Toan 15 phut Chuong 5" },
  { label: "Kiem Tra Van 15 phut Chuong 5" },
  { label: "Kiem Tra Su 15 phut Chuong 5" },
  { label: "Kiem Tra Ly 15 phut Chuong 5" },
];

const Exam: React.FC = () => {
  return (
    <main className="mt-16 flex items-center justify-center flex-col">
      <Box className="flex">
        <Autocomplete
          disablePortal
          options={AllExams}
          sx={{ width: 300 }}
          onInputChange={(e, Value) => {
            console.log(Value);
          }}
          renderInput={(params) => <TextField {...params} label="Exams" />}
        />
        <IconButton aria-label="filter" className="h-14 w-14">
          <FilterAlt />
        </IconButton>
      </Box>
      <Grid
        container
        rowSpacing={2}
        columnSpacing={2}
        columns={4}
        className="flex justify-center items-center mt-2"
      >
        {AllExams.map((item, key) => (
          <CardExam title={item.label} key={key} />
        ))}
      </Grid>
    </main>
  );
};

export default Exam;
