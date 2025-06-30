type Props = {
  formData: any;
  setFormData: (data: any) => void;
  errors: any;
  setErrors: (data: any) => void;
};
export default function Step3({
  formData,
  setFormData,
  errors,
  setErrors,
}: Props) {
  return (
    <div className="gap-2 flex flex-col mt-6">
      <div className="flex gap-1">
        <p className="text-sm font-semibold text-[#334155]">Date of birth</p>
        <p className="text-sm font-semibold text-[#e14942]">*</p>
      </div>

      <input
        type="date"
        className="rounded-[8px] border p-2.5 border-[#CBD5E1]"
        value={formData.date}
        onChange={(e) => {
          setFormData({ ...formData, date: e.target.value });
          if (errors.date) {
            setErrors((prev: any) => ({ ...prev, date: "" }));
          }
        }}
      />
      {errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}

      <div>
        <p className="text-sm font-semibold text-[#334155] mt-2">
          Profile image <span className="text-[#e14942]">*</span>
        </p>

        <div className="h-[180px] px-4 flex-col flex justify-center items-center gap-2 bg-[#7F7F800D] mt-3 rounded-[6px]">
          <div className="rounded-[50px] bg-white flex items-center w-[28px] h-[28px] justify-center">
            <img
              src="/image.svg"
              alt="add image"
              className="w-[16px] h-[16px]"
            />
          </div>
          <div className="flex justify-center">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0]; //songsn zurag
                if (file) {
                  setFormData({ ...formData, image: file }); // zurgiig hadgaldg
                }
              }}
              className="w-full  p-2.5 rounded-[8px] mt-2 outline-none"
            />

            {formData.image && (
              <img
                src={URL.createObjectURL(formData.image)} //zurgiig haruuldg
                alt="Preview"
                className="w-24 h-24 mt-2 rounded-full object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
