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
    date: string | number;
    image: string | null;
  };

  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    date: "",
    image: "",
  });
  // console.log("image", formData.image);

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

  const validateStep2 = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.email.toString().trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.phone.toString().trim()) {
      newErrors.phone = "Phone is required";
    }

    if (!formData.password.toString().trim()) {
      newErrors.password = "Password is required";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.date.toString().trim()) {
      newErrors.date = "date is required";
    }

    if (!formData.image) {
      newErrors.image = "Profile image is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="min-h-screen bg-[#f4f4f4] flex items-center justify-center px-4 sm:px-[480px]">
      <div
        className={`flex w-[480px] ${
          step > 3
            ? "h-[193px]"
            : step === 2 && (errors.email || errors.phone)
            ? "h-[735px]"
            : "h-[655px]"
        } p-8 flex-col border rounded-lg bg-white relative`}
      >
        <div>
          <img src="/Main 1.png" alt="" />

          {step > 3 ? (
            <p className="text-[26px] font-semibold text-[#202124]">
              Join Us! 😎
            </p>
          ) : (
            <p className="text-[26px] font-semibold text-[#202124]">
              You're All Set 🔥
            </p>
          )}

          {step > 3 ? (
            <p className="text-lg font-normal text-[#8e8e8e]">
              Please provide all current information accurately.
            </p>
          ) : (
            <p className="text-lg font-normal text-[#8e8e8e]">
              We have received your submission. Thank you!
            </p>
          )}

          {step === 1 && (
            <Step1
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              setErrors={setErrors}
            />
          )}
          {step === 2 && (
            <Step2
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              setErrors={setErrors}
            />
          )}
          {step === 3 && (
            <Step3
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              setErrors={setErrors}
            />
          )}

          {step <= 3 ? (
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
                  if (step === 1 && validateStep1()) {
                    setStep(2);
                  } else if (step === 2 && validateStep2()) {
                    setStep(3);
                  } else if (step === 3 && !validateStep3()) {
                    setStep(4);
                  }
                }}
                className={
                  step === 1
                    ? "px-4 py-2 bg-[#121316] text-white rounded-[8px] w-[416px] h-[44px]"
                    : "px-4 py-2 bg-[#121316] text-white rounded-[8px] w-[280px] h-[44px]"
                }
              >
                {step <= 3 ? `Continue ${step}/3` : "Finish"}
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
