// import Button from "@elements/Button";
import CheckboxGroup from "@elements/CheckboxGroup";
import Navbar from "@fragments/Navbar";
import { useState } from "react";

export default function Tess() {
  const [value, setValue] = useState([]);

  const options = [
    {
      description: "Ini Contoh Deskripsi",
      label: "Opsi Pertama",
      value: "test1",
    },
    {
      description: "Ini Contoh Deskripsi",
      label: "Opsi Kedua",
      value: "test2",
    },
    {
      description: "Ini Contoh Deskripsi",
      label: "Opsi Ketiga",
      value: "test3",
    },
  ];

  const isChecked = (option, val) => {
    return val.includes(option.value);
  };

  const getOptionDescription = (option) => {
    return option.description;
  };
  const getOptionLabel = (option) => {
    return option.label;
  };
  // const getOptionDisabled = (option) => {
  //   return option.disabled;
  // };
  const onChange = (option, val) => {
    const matchIndex = val.findIndex((v) => v === option.value);
    let newVal = [...val];
    if (matchIndex >= 0) newVal.splice(matchIndex, 1);
    else newVal.push(option.value);
    setValue([...newVal]);
  };

  const checkboxProps = {
    getOptionDescription,
    getOptionLabel,
    isChecked,
    onChange,
    options,
    value,
  };

  return (
    <div className="">
      <Navbar />
      <div className="container py-4">
        <CheckboxGroup {...checkboxProps} />
      </div>
    </div>
  );
}
