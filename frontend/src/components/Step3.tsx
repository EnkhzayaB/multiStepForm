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

        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            const file = e.target.files?.[3]; //songsn zurag
            if (file) {
              setFormData({ ...formData, image: file }); // zurgiig hadgaldg
            }

            //error heseg
            // setFormData({ ...formData, image: e.target.value });
            // if (errors.image) {
            //   setErrors((prev: any) => ({ ...prev, image: "" }));
            // }
          }}
          className="w-full border border-[#CBD5E1] p-2.5 rounded-[8px] mt-2"
        />
        {/* {errors.image && (
          <p className="text-red-500 text-sm mt-2.5">{errors.image}</p>
        )} */}

        {formData.image && (
          <img
            src={URL.createObjectURL(formData.image)} //zurgiig haruuldg
            alt="Preview"
            className="w-24 h-24 mt-2 rounded-full object-cover"
          />
        )}
      </div>
    </div>
  );
}
