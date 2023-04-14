import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react"


export default function Contact() {

  const [submitValue, setSubmitValue] = useState()
  const { register, formState: {errors}, handleSubmit } = useForm({ mode: "onChange"});
  const  onSubmit = data => console.log(data);


  return (
    <a>
      <label htmlFor="my-modal-3" className="btn btn-ghost normal-case text-xl">
        contact
      </label>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">contact me</h3>
          <div className="form-control">
            <label className="label">
              <span className="label-text">what do you like to be called?</span>
            </label>
            <label className="input-group">
              <span>name</span>
              <input
                {...register("firstName", { required: "this is required"})}
                type="text"
                placeholder=""
                id="name"
                className="input input-bordered"
              />
              {errors.firstName && <p>{errors.firstName.message}</p>}
            </label>
            <label className="label">
              <span className="label-text">lets get in touch</span>
            </label>
            <label className="input-group">
              <span>email</span>
              <input
              {...register("email", { required: "this is required", pattern: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/ }) }
                type="text"
                placeholder=""
                id="email"
                className="input input-bordered"
              />
              {errors.email && <p>{errors.email.message}</p>}
            </label>
            <label className="label">
              <span className="label-text">anything else?</span>
            </label>
            <input
            {...register("thoughts")}
              type="text"
              placeholder="leave some thoughts"
              id="text"
              className="input input-bordered w-full max-w-xs"
            />
            <input type="submit" className="btn btn-ghost normal-case text-xl"/>
          </div>
        </div>
      </div>
      </form>
    </a>
  );
}
