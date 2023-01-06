import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <section className="contact-form md:mt-[90px] mt-[50px]">
      <div className="container">
        {isSubmitted && (
          <div className="mx-auto mt-[40px] text-center">
            <h1 className="text-[32px] md:text-[40px] lg:text-[64px] leading-[120%] text-center font-bold max-w-[1024px] mx-auto">THANK YOU! <br></br> FOR SIGNING UP TO WYDEN.</h1>
            <p className="md:text-[18px] mt-[26px] lg:text-[24px] max-w-[658px] mx-auto">
              Please stay tuned and keep an eye out on your email for the
              release date.
            </p>
            <Link
              className="button"
              to="/"
            >
              Back to the main page
            </Link>
          </div>
        )}
        {!isSubmitted && (
          <div className="max-w-[449px] mx-auto mt-[40px]">
            <h2 className="text-[28px] md:text-[32px] text-center md:mt-[90px] mt-[50px] lg:text-[48px] font-bold">
              Try it now
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="block">
                <p>What is your name</p>
                <input
                  type="text"
                  className="mt-[8px] px-4 py-3 rounded-[10px] border border-[#A1A1A1] text-[14px] w-full"
                  placeholder="Shant Kevorkian"
                  {...register("First name", { required: true, maxLength: 80 })}
                />
              </label>
              <label className="mt-[20px] block">
                <p>What is your work email</p>
                <input
                  type="email"
                  placeholder="example@mail.com"
                  className="mt-[8px] px-4 py-3 rounded-[10px] border border-[#A1A1A1] text-[14px] w-full"
                  {...register("Email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
              </label>

              <button type="submit" className="form-submit button">
                Get Started
              </button>
            </form>
            <Link
              className="border-t border-[#E4E6E9] block text-center w-full pt-[30px] text-accent font-bold"
              to="/"
            >
              Back to the main page
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
