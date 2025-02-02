import parse from "html-react-parser";

export default function TextContent({
  heading,
  desc,
}: {
  heading: string | undefined;
  desc: string | undefined;
}) {
  return (
    <div className="px-52 my-10">
      <h2 className="text-4xl mb-5 capitalize">{heading}</h2>
      <div className="text-content text-justify indent-8 flex flex-col gap-3">
        {parse(desc ?? "")}
      </div>
    </div>
  );
}
