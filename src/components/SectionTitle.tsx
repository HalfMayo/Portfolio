export default function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className="px-4 py-2 sm:px-12 sm:py-8 bg-white text-on-surface border-black border-4 shadow-[7px_7px_0_1px_rgba(0,0,0,1)] rounded-sm w-full">
      <h2 className="font-bold text-2xl sm:text-4xl pb-2 sm:pb-4">{title}</h2>
      <p className="text-sm sm:text-lg">{subtitle}</p>
    </div>
  );
}
