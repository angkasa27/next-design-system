import Button from "@components/elements/Button";
import Navbar from "@components/fragments/Navbar";
export default function Tess() {
  return (
    <div className="dark:bg-slate-900 bg-white font-inter">
      <Navbar />
      <div className="container py-4">
        <Button component="button" variant="soft">
          Ya
        </Button>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          commodi quos. Quasi culpa, qui dolores praesentium delectus,
          asperiores et cumque non sapiente deserunt debitis nam ullam nostrum
          obcaecati ducimus nobis.
        </div>
      </div>
    </div>
  );
}
