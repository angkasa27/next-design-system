// import Button from "@elements/Button";
import CheckboxGroup from "@elements/CheckboxGroup";
import Navbar from "@fragments/Navbar";
import { useState } from "react";
import Button from "@elements/Button";
import Card from "@elements/Card";
import Alert from "@elements/Alert";

export default function Tess() {
  return (
    <div className="">
      <Navbar />
      <div className="container flex gap-2 flex-col mt-2">
        <AlertSection />
        <ButtonSection />
        <CheckboxSection />
      </div>
    </div>
  );
}

export function AlertSection() {
  return (
    <div className="flex flex-col gap-2">
      <Alert
        icon={
          <svg
            className="h-4 w-4 mt-0.5"
            fill="currentColor"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        }
        id="alert1"
        title="Ini contoh alert dengan detail"
      >
        <div className="text-default-secondary text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde officia
          ad dolores, voluptates odio fuga perferendis autem accusamus excepturi
          magni corporis quidem exercitationem ipsam sed delectus nam tempora
          eaque? Ut?
        </div>
      </Alert>
      <Alert
        action={[
          { name: "Detail", props: { onClick: () => console.log("detail") } },
        ]}
        icon={
          <svg
            className="h-4 w-4 mt-0.5"
            fill="currentColor"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        }
        id="alert2"
        title="Ini contoh alert dengan action detail"
      />
      <Alert
        color="red"
        dismissible
        icon={
          <svg
            className="h-4 w-4 mt-0.5"
            fill="currentColor"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        }
        id="alert3"
        title="Ini contoh text alert"
      />
    </div>
  );
}

export function ButtonSection() {
  const buttonVariant = ["solid", "soft", "outline", "text"];
  const buttonColor = ["blue", "gray", "green", "red", "purple", "yellow"];
  const buttonSize = ["fluid", "small", "medium", "large"];
  const defaultStyle = "capitalize";

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
