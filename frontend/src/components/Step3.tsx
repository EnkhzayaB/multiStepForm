export default function Step3() {
  return (
    <div className="gap-2 flex flex-col mt-6">
      <div className="flex gap-1">
        <p className="text-sm font-semibold text-[#334155]">Date of birth</p>
        <p className="text-sm font-semibold text-[#e14942]">*</p>
      </div>

      <input
        type="date"
        className="rounded-[8px] border p-2.5 border-[#CBD5E1]"
      />

      <div className="flex gap-1 mt-2">
        <p className="text-sm font-semibold text-[#334155]">Profile image</p>
        <p className="text-sm font-semibold text-[#e14942]">*</p>
      </div>

      <input
        type="image"
        className="rounded-[8px] border p-2.5 border-[#CBD5E1]"
      />
    </div>
  );
}
