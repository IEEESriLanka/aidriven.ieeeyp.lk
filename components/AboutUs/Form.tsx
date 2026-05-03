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
        className="group flex items-center gap-2 self-start rounded-xl border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isPending ? "Sending..." : "Send Message"}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </button>
    </form>
  );
};

export default Form;
