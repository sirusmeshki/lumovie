import clsx from "clsx";

export default function Button({
  isCta,
  className,
  text,
}: {
  isCta?: boolean;
  className?: string;
  text: string;
}) {
  return (
    <button
      className={clsx(
        className ? className : "",
        isCta
          ? "bg-primary text-background hover:opacity-90"
          : "bg-background text-white border border-stone-900 border-solid hover:bg-neutral-950 hover:border-stone-700",
        "px-6 py-3 font-bold rounded-full capitalize text-xs whitespace-nowrap transition"
      )}
      type="button">
      {text}
    </button>
  );
}
