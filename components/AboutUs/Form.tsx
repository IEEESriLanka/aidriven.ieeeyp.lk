const Form = () => {
    const inputStyle =
        "p-[15.8px_24.8px_17.4px_24.8px] rounded-[8px] border-1 border-primary justify-center w-full bg-[#191919] text-[14px] text-white focus:outline-none focus:border-2 ";
    const labelStyle = "flex text-[16px] font-[500]";
    const Star = () => <div className="text-[16px] text-primary">*</div>;

    return (
        <div className="flex flex-col py-[40px] w-full md:w-[846px] px-[44px] bg-[#45413DCC] rounded-[4px_24px] gap-[20px]">
            <p className="uppercase font-elemental-end text-[20px] text-white">contact us</p>

            <div className="flex flex-col md:flex-row justify-between w-full gap-[20px] md:gap-[100px]">
                <div className="w-full flex flex-col gap-[20px]">
                    <label className={labelStyle} htmlFor="fname">
                        First Name<Star />
                    </label>
                    <input name="fname" type="text" className={inputStyle} placeholder="First name here" required />
                </div>
                <div className="w-full flex flex-col gap-[20px]">
                    <label className={labelStyle} htmlFor="lname">
                        Last Name<Star />
                    </label>
                    <input name="lname" type="text" className={inputStyle} placeholder="Last name here" required />
                </div>
            </div>

            <div className="w-full flex flex-col gap-[20px]">
                <label className={labelStyle} htmlFor="email">
                    Email Address<Star />
                </label>
                <input name="email" type="email" className={inputStyle} placeholder="Add email" required />
            </div>

            <div className="w-full flex flex-col gap-[20px]">
                <label className={labelStyle} htmlFor="comments">
                    Comments/Questions
                </label>
                <textarea className={`${inputStyle} h-[180px]`} placeholder="Comments" />
            </div>
            <button className="cursor-pointer bg-[linear-gradient(180deg,#EA421E_39.42%,#9D2107_88.46%)] rounded-[8px] text-center h-[44px] w-[174px] text-white place-content-center hover:bg-[linear-gradient(0deg,#EA421E_39.42%,#9D2107_88.46%)] hover:transition-colors hover:duration-700">
                Send Message
            </button>
        </div>
    );
};

export default Form