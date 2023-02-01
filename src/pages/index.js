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
import Icon from "@assets/Icon";
import Input from "@form/Input";

const COLORS = ["blue", "gray", "green", "red", "purple", "yellow"];

export default function App() {
  return (
    <div className="">
      <Navbar />
      <div className="container flex gap-2 flex-col mt-2">
        <div>
          <List className="w-full flex flex-col" component="div">
            <Input
              className="w-full"
              // hint={"this is hint example"}
              id="Email"
              label="Email"
              placeholder="your@mail.com"
              type="email"
            />
            <Input
              className="w-full"
              disabled
              id="Email"
              label="Email"
              placeholder="your@mail.com"
              type="email"
            />
            <Input
              className="w-full"
              id="Email"
              label="Email"
              optional
              placeholder="your@mail.com"
              type="email"
            />
          </List>
          <List className="w-full flex flex-col gap-2" component="div">
            <Input
              className="w-full"
              hint={"Input hint"}
              id="Email"
              label="Email"
              placeholder="your@mail.com"
              type="email"
            />
            <Input
              className="w-full"
              error="Input error"
              id="Email"
              label="Email"
              placeholder="your@mail.com"
              type="email"
            />
          </List>
          <List className="w-full flex flex-col" component="div">
            <Input
              className="w-full"
              icon={<Icon name="Mail" />}
              id="Email"
              label="Email"
              placeholder="your@mail.com"
              type="email"
            />
            <Input
              className="w-full"
              icon={<Icon name="Mail" />}
              iconPosition="right"
              id="Email"
              label="Email"
              placeholder="your@mail.com"
              type="email"
            />
          </List>
          <List className="w-full flex flex-col" component="div">
            <Input
              className="w-full"
              id="Email"
              label="Email"
              placeholder="your@mail.com"
              type="email"
            />
            <Input
              className="w-full"
              iconPosition="right"
              id="Email"
              label="Email"
              placeholder="your@mail.com"
              type="email"
            />
          </List>
        </div>
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
  const InfoIcon = <Icon name="Info" size={20} />;

  return (
    <div>
      <List className="w-full" component="div">
        <Alert
          className="w-full"
          icon={InfoIcon}
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
      <List className="w-full" component="div">
        <Alert
          action={[
            { name: "Detail", props: { onClick: () => console.log("detail") } },
          ]}
          className="w-full"
          icon={InfoIcon}
          id="alert2"
          title="Ini contoh alert dengan action detail"
        />
      </List>
      <List className="w-full" component="div">
        <Alert
          className="w-full"
          dismissible
          icon={InfoIcon}
          id="alert3"
          title="Ini contoh alert close"
        />
      </List>
      <List className="flex flex-col gap-2 w-full" component="div">
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
    </div>
  );
}

export function BadgeSection() {
  const BellIcon = <Icon name="Bell" />;

  return (
    <div>
      <List className="flex flex-wrap gap-2 w-full" component="div">
        <Button className="relative">
          {BellIcon}
          <Badge color="red" />
        </Button>
        <Button className="relative" variant="soft">
          {BellIcon}
          <Badge color="red" ping />
        </Button>
        <Button className="relative">
          {BellIcon}
          <Badge color="red">99+</Badge>
        </Button>
        <Button className="relative" variant="soft">
          {BellIcon}
          <Badge color="red" ping>
            99+
          </Badge>
        </Button>
      </List>
      <List className="flex flex-wrap gap-2 w-full" component="div">
        {COLORS.map((color, i) => (
          <Button className="relative" key={i} variant="soft">
            {BellIcon}
            <Badge color={color}></Badge>
          </Button>
        ))}
      </List>
      <List className="flex flex-wrap gap-2 w-full" component="div">
        {COLORS.map((color, i) => (
          <Button className="relative" key={i} variant="soft">
            {BellIcon}
            <Badge color={color}>{color}</Badge>
          </Button>
        ))}
      </List>
    </div>
  );
}

export function ButtonSection() {
  const buttonVariant = ["solid", "soft", "outline", "text"];
  const buttonSize = ["small", "medium", "large"];
  const defaultStyle = "capitalize";

  return (
    <div>
      <List
        className="flex flex-wrap gap-2 items-center w-full"
        component="div"
      >
        {buttonSize.map((size, i) => (
          <div key={i}>
            <Button className={defaultStyle} size={size}>
              {size}
            </Button>
          </div>
        ))}
      </List>
      <List
        className="flex flex-wrap gap-2 items-center w-full"
        component="div"
      >
        {buttonVariant.map((variant, i) => (
          <div key={i}>
            <Button className={defaultStyle} disabled variant={variant}>
              {variant}
            </Button>
          </div>
        ))}
      </List>
      <List
        className="flex flex-wrap gap-2 items-center w-full"
        component="div"
      >
        {buttonVariant.map((variant, i) => (
          <div key={i}>
            <Button className={defaultStyle} loading variant={variant}>
              {variant}
            </Button>
          </div>
        ))}
      </List>
      <List
        className="flex flex-wrap gap-2 items-center w-full"
        component="div"
      >
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
    </div>
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
    <div>
      <List
        className="flex flex-wrap gap-2 items-center w-full"
        component="div"
      >
        {COLORS.map((color, i) => (
          <Chip color={color} key={i}>
            {color}
          </Chip>
        ))}
      </List>
      <List
        className="flex flex-wrap gap-2 items-center w-full"
        component="div"
      >
        {COLORS.map((color, i) => (
          <Chip color={color} key={i} onClose={() => {}}>
            {color}
          </Chip>
        ))}
      </List>
    </div>
  );
}
