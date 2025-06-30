"use client";
import { useState } from "react";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";

export default function Home() {
  const [step, setStep] = useState(1);
  type FormDataType = {
    firstName: string;
    lastName: string;
    userName: string;
    email: string | number;
    phone: string | number;
    password: string | number;
    confirmPassword: string | number;
  };

  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const validateStep1 = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!formData.userName.trim()) {
      newErrors.userName = "Username is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="w-full h-full bg-[#f4f4f4] pt-[182px] pr-[480px] pb-[187px] pl-[480px] justify-center flex items-center">
      <div className="flex w-[480px] h-[655px] p-8 flex-col border rounded-lg bg-white relative">
        <div>
          <img src="/Main 1.png" alt="" />
          <p className="text-[26px] font-semibold text-[#202124]">
            Join Us! 😎
          </p>
          <p className="text-lg font-normal text-[#8e8e8e]">
            Please provide all current information accurately.
          </p>

          {step === 1 && (
            <Step1
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              setErrors={setErrors}
            />
          )}
          {step === 2 && (
            <Step2 formData={formData} setFormData={setFormData} />
          )}
          {step === 3 && <Step3 />}

          <div className="flex justify-between absolute bottom-8 gap-2">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 border rounded-[8px] text-gray-600  w-[128px] h-[44px]"
              >
                Back
              </button>
            )}

            <button
              onClick={() => {
                if (step === 1) {
                  if (validateStep1()) {
                    setStep(2);
                  }
                } else {
                  setStep(step + 1);
                }
              }}
              className={
                step === 1
                  ? "px-4 py-2 bg-[#121316] text-white rounded-[8px] w-[416px] h-[44px]"
                  : "px-4 py-2 bg-[#121316] text-white rounded-[8px] w-[280px] h-[44px]"
              }
            >
              {step < 3 ? `Continue ${step}/3` : "Finish"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
