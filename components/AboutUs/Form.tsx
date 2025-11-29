"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";

const initialState = {
  message: "",
  errors: {},
};

const Form = () => {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState,
  );

  const inputStyle =
    "p-[15.8px_24.8px_17.4px_24.8px] rounded-[8px] border-1 border-primary justify-center w-full bg-[#191919] text-[14px] text-white focus:outline-none focus:border-2 ";
  const labelStyle = "flex text-[16px] font-[500]";
  const Star = () => <div className="text-primary text-[16px]">*</div>;

  return (
    <form
      action={formAction}
      className="flex w-full flex-col gap-[20px] rounded-[4px_24px] bg-[#45413DCC] px-[44px] py-[40px] md:w-[846px]"
    >
      <p className="font-elemental-end text-[20px] text-white uppercase">
        contact us
      </p>

      {state?.message && (
        <div
          className={`rounded-md p-4 ${state.success ? "bg-green-900/50 text-green-200" : "bg-red-900/50 text-red-200"}`}
        >
          {state.message}
        </div>
      )}

      <div className="flex w-full flex-col justify-between gap-[20px] md:flex-row md:gap-[100px]">
        <div className="flex w-full flex-col gap-[20px]">
          <label className={labelStyle} htmlFor="fname">
            First Name
            <Star />
          </label>
          <input
            name="fname"
            type="text"
            className={inputStyle}
            placeholder="First name here"
            required
          />
          {state?.errors?.fname && (
            <p className="text-sm text-red-500">{state.errors.fname}</p>
          )}
        </div>
        <div className="flex w-full flex-col gap-[20px]">
          <label className={labelStyle} htmlFor="lname">
            Last Name
            <Star />
          </label>
          <input
            name="lname"
            type="text"
            className={inputStyle}
            placeholder="Last name here"
            required
          />
          {state?.errors?.lname && (
            <p className="text-sm text-red-500">{state.errors.lname}</p>
          )}
        </div>
      </div>

      <div className="flex w-full flex-col gap-[20px]">
        <label className={labelStyle} htmlFor="email">
          Email Address
          <Star />
        </label>
        <input
          name="email"
          type="email"
          className={inputStyle}
          placeholder="Add email"
          required
        />
        {state?.errors?.email && (
          <p className="text-sm text-red-500">{state.errors.email}</p>
        )}
      </div>

      <div className="flex w-full flex-col gap-[20px]">
        <label className={labelStyle} htmlFor="comments">
          Comments/Questions
        </label>
        <textarea
          name="comments"
          className={`${inputStyle} h-[180px]`}
          placeholder="Comments"
        />
      </div>
      <button
        disabled={isPending}
        className="h-[44px] w-[174px] cursor-pointer place-content-center rounded-[8px] bg-[linear-gradient(180deg,#EA421E_39.42%,#9D2107_88.46%)] text-center text-white hover:bg-[linear-gradient(0deg,#EA421E_39.42%,#9D2107_88.46%)] hover:transition-colors hover:duration-700 disabled:opacity-50"
      >
        {isPending ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default Form;
