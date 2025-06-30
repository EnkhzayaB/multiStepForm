type Props = {
  formData: any;
  setFormData: (data: any) => void;
  errors: any;
  setErrors: (data: any) => void;
};

export default function Step2({
  formData,
  setFormData,
  errors,
  setErrors,
}: Props) {
  return (
    <div className="gap-2 flex flex-col mt-6">
      <div className="flex gap-1">
        <p className="text-sm font-semibold text-[#334155]">Email</p>
        <p className="text-sm font-semibold text-[#e14942]">*</p>
      </div>

      <input
        className="rounded-[8px] border p-2.5 border-[#CBD5E1]"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
          if (errors.email) {
            setErrors((prev: any) => ({ ...prev, email: "" }));
          }
        }}
      />
      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

      <div className="flex gap-1 mt-2">
        <p className="text-sm font-semibold text-[#334155]">Phone number</p>
        <p className="text-sm font-semibold text-[#e14942]">*</p>
      </div>

      <input
        type="number"
        className="rounded-[8px] border p-2.5 border-[#CBD5E1]"
        placeholder="Phone number"
        value={formData.phone}
        onChange={(e) => {
          setFormData({ ...formData, phone: e.target.value });
          if (errors.phone) {
            setErrors((prev: any) => ({ ...prev, phone: "" }));
          }
        }}
      />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

      <div className="flex gap-1 mt-2">
        <p className="text-sm font-semibold text-[#334155]">password</p>
        <p className="text-sm font-semibold text-[#e14942]">*</p>
      </div>

      <input
        className="rounded-[8px] border p-2.5 border-[#CBD5E1]"
        placeholder="password"
        value={formData.password}
        onChange={(e) => {
          setFormData({ ...formData, password: e.target.value });
          if (errors.password) {
            setErrors((prev: any) => ({ ...prev, password: "" }));
          }
        }}
      />
      {errors.password && (
        <p className="text-red-500 text-sm">{errors.password}</p>
      )}

      <div className="flex gap-1 mt-2">
        <p className="text-sm font-semibold text-[#334155]">Confirm password</p>
        <p className="text-sm font-semibold text-[#e14942]">*</p>
      </div>

      <input
        className="rounded-[8px] border p-2.5 border-[#CBD5E1]"
        placeholder="Confirm password"
        value={formData.confirmPassword}
        onChange={(e) => {
          setFormData({ ...formData, confirmPassword: e.target.value });
          if (errors.confirmPassword) {
            setErrors((prev: any) => ({ ...prev, confirmPassword: "" }));
          }
        }}
      />
      {errors.confirmPassword && (
        <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
      )}
    </div>
  );
}
