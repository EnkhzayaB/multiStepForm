type Props = {
  formData: {
    username: string | number;
    email: string | number;
    phone: number;
    password: string | number;
    confirmPassword: string | number;
  };
  setFormData: (data: any) => any;
};

export default function Step2({ formData, setFormData }: Props) {
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
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />

      <div className="flex gap-1 mt-2">
        <p className="text-sm font-semibold text-[#334155]">Phone number</p>
        <p className="text-sm font-semibold text-[#e14942]">*</p>
      </div>

      <input
        type="number"
        className="rounded-[8px] border p-2.5 border-[#CBD5E1]"
        placeholder="Phone number"
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />

      <div className="flex gap-1 mt-2">
        <p className="text-sm font-semibold text-[#334155]">password</p>
        <p className="text-sm font-semibold text-[#e14942]">*</p>
      </div>

      <input
        className="rounded-[8px] border p-2.5 border-[#CBD5E1]"
        placeholder="password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />

      <div className="flex gap-1 mt-2">
        <p className="text-sm font-semibold text-[#334155]">Confirm password</p>
        <p className="text-sm font-semibold text-[#e14942]">*</p>
      </div>

      <input
        className="rounded-[8px] border p-2.5 border-[#CBD5E1]"
        placeholder="Confirm password"
        value={formData.confirmPassword}
        onChange={(e) =>
          setFormData({ ...formData, confirmPassword: e.target.value })
        }
      />
    </div>
  );
}
