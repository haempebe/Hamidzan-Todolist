import React, { useState } from "react";
import { Card, FloatingLabel, Button } from "flowbite-react";

const Todolist = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Ayo Cepat Selesaikan Tugasmu!
      </h5>
      <div className="grid grid-flow-row-dense grid-cols-4 mt-3">
        <div className="col-span-3">
          <FloatingLabel
            value={value}
            onChange={(e) => setValue(e.target.value)}
            variant="outlined"
            label="Apa Tugas Hari ini?"
          />
        </div>
        <div className="ml-3 me-3">
          <Button className="w-full ml-2 mt-1" type="submit">
            Tambah
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Todolist;
