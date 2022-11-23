import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Loader from "./Loader/Loader";

const AddCoffee = () => {
  const { register, handleSubmit, reset } = useForm();
  const [isCoffeeLoading, setIsCoffeeLoading] = useState(false);

  const addCoffeeFormSubmitHandler = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    setIsCoffeeLoading(true);
    fetch(
      `https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_IMAGEBB_KEY}`,
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then(({ data: imgData, success }) => {
        if (success) {
          const newCoffee = {
            ...data,
            image: imgData.url,
          };
          fetch("http://localhost:5000/api/v1/coffees", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newCoffee),
          })
            .then((res) => res.json())
            .then(({ data, success }) => {
              if (success) {
                toast.success(
                  `You have successfully added ${data.createdCoffee.name}`
                );
                setIsCoffeeLoading(false);
                reset();
              }
            });
        }
      });
  };

  if (isCoffeeLoading) {
    return <Loader className="min-h-screen" />;
  }

  return (
    <div className="min-h-screen w-full px-4">
      <div className="mx-auto mt-10 max-w-lg px-3 py-5 shadow-lg rounded-lg bg-base-100">
        <h2 className="text-center text-3xl mb-5">Add a new Coffee</h2>
        <form
          onSubmit={handleSubmit(addCoffeeFormSubmitHandler)}
          className="max-w-md mx-auto"
        >
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Coffee Name</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Coffee name"
              className="input input-bordered w-full max-w-md"
            />
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              {...register("price")}
              type="number"
              placeholder="Piece"
              className="input input-bordered w-full max-w-md"
            />
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              {...register("description")}
              className="textarea textarea-bordered"
              placeholder="Description"
            ></textarea>
          </div>
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text">Coffee Picture</span>
            </label>
            <input
              type="file"
              {...register("image")}
              className="file-input file-input-bordered w-full max-w-md"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Add new coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
