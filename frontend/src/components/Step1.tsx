type Props = {
  formData: any;
  setFormData: (data: any) => any;
  errors: any;
  setErrors: any;
};
export default function Step1({
  formData,
  setFormData,
  errors,
  setErrors,
}: Props) {
  return (
    <div className="gap-2 flex flex-col mt-6">
      <div className="flex gap-1">
        <p className="text-sm font-semibold text-[#334155]">First name</p>
        <p className="text-sm font-semibold text-[#e14942]">*</p>
      </div>
      <input
        className="rounded-[8px] border p-2.5 border-[#CBD5E1]"
        placeholder="First name"
        value={formData.firstName}
        onChange={(e) => {
          setFormData({ ...formData, firstName: e.target.value });

          if (errors.firstName) {
            setErrors((prev: any) => ({ ...prev, firstName: "" }));
          }
        }}
      />
      {errors.firstName && (
        <p className="text-red-500 text-sm">{errors.firstName}</p>
      )}

      <div className="flex gap-1 mt-2">
        <p className="text-sm font-semibold text-[#334155]">Last name</p>
        <p className="text-sm font-semibold text-[#e14942]">*</p>
      </div>

      <input
        className="rounded-[8px] border p-2.5 border-[#CBD5E1]"
        placeholder="Last name"
        value={formData.lastName}
        onChange={(e) => {
          setFormData({ ...formData, lastName: e.target.value });

          if (errors.lastName) {
            setErrors((prev: any) => ({ ...prev, lastName: "" }));
          }
        }}
      />
      {errors.lastName && (
        <p className="text-red-500 text-sm">{errors.lastName}</p>
      )}

      <div className="flex gap-1 mt-2">
        <p className="text-sm font-semibold text-[#334155]">Username</p>
        <p className="text-sm font-semibold text-[#e14942]">*</p>
      </div>

      <input
        className="rounded-[8px] border p-2.5 border-[#CBD5E1]"
        placeholder="Username"
        value={formData.userName}
        onChange={(e) => {
          setFormData({ ...formData, userName: e.target.value });

          if (errors.userName) {
            setErrors((prev: any) => ({ ...prev, userName: "" }));
          }
        }}
      />
      {errors.userName && (
        <p className="text-red-500 text-sm">{errors.userName}</p>
      )}
    </div>
  );
}
