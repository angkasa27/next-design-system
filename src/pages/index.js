// import Button from "@elements/Button";
import CheckboxGroup from "@elements/CheckboxGroup";
import Navbar from "@fragments/Navbar";
import { useState } from "react";
import Button from "@elements/Button";
import Alert from "@elements/Alert";
import Acordion from "@elements/Acordion";
import Badge from "@elements/Badge";
import List from "@elements/List";
import Chip from "@elements/Chip";

const COLORS = ["blue", "gray", "green", "red", "purple", "yellow"];

export default function App() {
  return (
    <div className="">
      <Navbar />
      <div className="container flex gap-2 flex-col mt-2">
        <AcordionSection />
        <AlertSection />
        <BadgeSection />
        <ButtonSection />
        <CheckboxSection />
        <ChipSection />
      </div>
    </div>
  );
}

export function AcordionSection() {
  const items = [
    {
      detail: (
        <p>
          This is the items accordion body. It is hidden by default, until the
          collapse plugin adds the appropriate classes that we use to style each
          element. These classes control the overall appearance, as well as the
          showing and hiding via CSS transitions.
        </p>
      ),
      title: "Acordion #1",
    },
    {
      detail: (
        <p>
          This is the items accordion body. It is hidden by default, until the
          collapse plugin adds the appropriate classes that we use to style each
          element. These classes control the overall appearance, as well as the
          showing and hiding via CSS transitions.
        </p>
      ),
      title: "Acordion #2",
    },
  ];
  return (
    <ul>
      <List className="w-full">
        <Acordion id="Acordion-one" items={items} />
      </List>
      <List className="w-full">
        <Acordion activealwaysOpen bordered id="Acordion-one" items={items} />
      </List>
    </ul>
  );
}

export function AlertSection() {
  return (
    <ul>
      <List className="w-full">
        <Alert
          className="w-full"
          icon={
            <svg
              className="h-4 w-4 mt-0.5 "
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
          <div className="text-default-secondary body-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            officia ad dolores, voluptates odio fuga perferendis autem accusamus
            excepturi magni corporis quidem exercitationem ipsam sed delectus
            nam tempora eaque? Ut?
          </div>
        </Alert>
      </List>
      <List className="w-full">
        <Alert
          action={[
            { name: "Detail", props: { onClick: () => console.log("detail") } },
          ]}
          className="w-full"
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
      </List>
      <List className="w-full">
        <Alert
          className="w-full"
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
          title="Ini contoh alert close"
        />
      </List>
      <List className="flex flex-col gap-2 w-full">
        {COLORS.map((color, i) => (
          <Alert
            className="w-full"
            color={color}
            id={`alert-${color}`}
            key={i}
            title={`Ini contoh alert ${color}`}
          />
        ))}
      </List>
    </ul>
  );
}

export function BadgeSection() {
  return (
    <ul>
      <List className="flex flex-wrap gap-2 w-full">
        <Button className="relative">
          <svg
            fill="currentColor"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
          </svg>
          <Badge color="red" />
        </Button>
        <Button className="relative" variant="soft">
          <svg
            fill="currentColor"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
          </svg>
          <Badge color="red" ping />
        </Button>
        <Button className="relative">
          <svg
            fill="currentColor"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
          </svg>
          <Badge color="red">99+</Badge>
        </Button>
        <Button className="relative" variant="soft">
          <svg
            fill="currentColor"
            height="16"
            viewBox="0 0 16 16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
          </svg>
          <Badge color="red" ping>
            99+
          </Badge>
        </Button>
      </List>
      <List className="flex flex-wrap gap-2 w-full">
        {COLORS.map((color, i) => (
          <Button className="relative" key={i} variant="soft">
            <svg
              fill="currentColor"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
            </svg>
            <Badge color={color}></Badge>
          </Button>
        ))}
      </List>
    </ul>
  );
}

export function ButtonSection() {
  const buttonVariant = ["solid", "soft", "outline", "text"];
  const buttonSize = ["small", "medium", "large"];
  const defaultStyle = "capitalize";

  return (
    <ul>
      <List className="flex flex-wrap gap-2 items-center w-full">
        {buttonSize.map((size, i) => (
          <div key={i}>
            <Button className={defaultStyle} size={size}>
              {size}
            </Button>
          </div>
        ))}
      </List>
      <List className="flex flex-wrap gap-2 items-center w-full">
        {buttonVariant.map((variant, i) => (
          <div key={i}>
            <Button className={defaultStyle} disabled variant={variant}>
              {variant}
            </Button>
          </div>
        ))}
      </List>
      <List className="flex flex-wrap gap-2 items-center w-full">
        {buttonVariant.map((variant, i) => (
          <div key={i}>
            <Button className={defaultStyle} loading variant={variant}>
              {variant}
            </Button>
          </div>
        ))}
      </List>
      <List className="flex flex-wrap gap-2 items-center w-full">
        <div>
          <Button className={defaultStyle} fluid>
            Fluid
          </Button>
        </div>
        <div>
          <Button className={defaultStyle} rounded="full">
            Pill
          </Button>
        </div>
        <div>
          <Button className={defaultStyle} rounded="none">
            Flat
          </Button>
        </div>
      </List>
      {buttonVariant.map((variant, i) => (
        <List className="flex flex-wrap gap-2 w-full" key={i}>
          {COLORS.map((color, i) => (
            <Button
              className={defaultStyle}
              color={color}
              key={i}
              variant={variant}
            >
              {variant}
            </Button>
          ))}
        </List>
      ))}
    </ul>
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

export function ChipSection() {
  return (
    <ul>
      <List className="flex flex-wrap gap-2 items-center w-full">
        {COLORS.map((color, i) => (
          <Chip color={color} key={i}>
            {color}
          </Chip>
        ))}
      </List>
      <List className="flex flex-wrap gap-2 items-center w-full">
        {COLORS.map((color, i) => (
          <Chip color={color} key={i} onClose={() => {}}>
            {color}
          </Chip>
        ))}
      </List>
    </ul>
  );
}
