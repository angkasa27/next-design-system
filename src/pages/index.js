// import Button from "@elements/Button";
import CheckboxGroup from "@elements/CheckboxGroup";
import Navbar from "@fragments/Navbar";
import { useState } from "react";
import Button from "@elements/Button";
import Card from "@elements/Card";

export default function Tess() {
  return (
    <div className="">
      <Navbar />
      <div className="container flex gap-2 flex-col mt-2">
        <ButtonSection />
        <CheckboxSection />
      </div>
    </div>
  );
}

export function ButtonSection() {
  const buttonVariant = ["solid", "soft", "outline", "text"];
  const buttonColor = ["blue", "gray", "green", "red", "purple", "yellow"];
  const buttonSize = ["small", "medium", "large"];
  const defaultStyle = "capitalize tracking-wider";

  return (
    <>
      {buttonVariant.map((variant, i) => (
        <Card className="flex flex-wrap gap-2" key={i}>
          {buttonColor.map((color, i) => (
            <Button
              className={defaultStyle}
              color={color}
              key={i}
              variant={variant}
            >
              {variant}
            </Button>
          ))}
        </Card>
      ))}
      <Card className="flex flex-wrap gap-2 items-center">
        {buttonSize.map((size, i) => (
          <div key={i}>
            <Button className={defaultStyle} size={size}>
              {size}
            </Button>
          </div>
        ))}
      </Card>
      <Card className="flex flex-wrap gap-2 items-center">
        {buttonVariant.map((variant, i) => (
          <div key={i}>
            <Button className={defaultStyle} disabled variant={variant}>
              {variant}
            </Button>
          </div>
        ))}
      </Card>
      <Card className="flex flex-wrap gap-2 items-center">
        {buttonVariant.map((variant, i) => (
          <div key={i}>
            <Button className={defaultStyle} loading variant={variant}>
              {variant}
            </Button>
          </div>
        ))}
      </Card>
    </>
  );
}

export function CheckboxSection() {
  const [value, setValue] = useState(["1", "4"]);

  const options = [
    {
      description: "Ini Contoh Deskripsi",
      label: "Opsi Pertama",
      value: "1",
    },
    {
      description: "Ini Contoh Deskripsi",
      label: "Opsi Kedua",
      value: "2",
    },
    {
      description: "Ini Contoh Deskripsi",
      disabled: true,
      label: "Opsi Keempat",
      value: "4",
    },
    {
      description: "Ini Contoh Deskripsi",
      disabled: true,
      label: "Opsi Ketiga",
      value: "3",
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
  const getOptionDisabled = (option) => {
    return option?.disabled;
  };
  const onChange = (option, val) => {
    const matchIndex = val.findIndex((v) => v === option.value);
    let newVal = [...val];
    if (matchIndex >= 0) newVal.splice(matchIndex, 1);
    else newVal.push(option.value);
    setValue([...newVal]);
  };

  const checkboxProps = {
    getOptionDescription,
    getOptionDisabled,
    getOptionLabel,
    isChecked,
    onChange,
    options,
    value,
  };
  return <CheckboxGroup {...checkboxProps} />;
}
