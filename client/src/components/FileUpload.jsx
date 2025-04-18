import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { uploadMenuItems } from "../services/api";
import { addMenu } from "../features/menu/menuSlice";
import { useDispatch } from "react-redux";

const FileUpload = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [preview, setPreview] = useState(null);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("itemName", data.itemName);
    formData.append("price", data.price);
    formData.append("image", data.image[0]);
    console.log("FORMDATA :==>", formData);

    try {
      const res = await uploadMenuItems(formData);
      console.log("RESPONSE: ", res)
      dispatch(addMenu(res.data.data));
    } catch (error) {
      console.error("Upload Failed: ", error);
    }
  }; 
   
  //Image Preview Handler
  const onImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setPreview(URL.createObjectURL(file));
    console.log(file);
  };
 
  return (
    <div className="mt-4 container">
      <h3>FileUpload</h3>
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="mb-4">
          <label htmlFor="itemName">Item Name</label>
          <input
            className="form-control"
            type="text"
            id="itemName"
            {...register("itemName", { required: "Item Name is Required" })}
          />
          {errors.itemName && (
            <small className="text-danger">{errors.itemName.message}</small>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            step="1"
            className="form-control"
            {...register("price", {
              required: "Price is Required",
              min: { value: 1, message: "Price must not be a zero" },
            })}
          />
          {errors.price && (
            <small className="text-danger">{errors.price.message}</small>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="image">Image</label>
          <input
            className="form-control"
            type="file"
            id="image"
            accept="image/*"
            {...register("image", { required: "Image is required" })}
            onChange={onImageChange}
          />
          {errors.image && (
            <small className="text-danger">{errors.image.message}</small>
          )}
        </div>

        {preview && (
          <div>
            <img src={preview} alt="Preview" />
          </div>
        )}
        <button type="submit" className="btn btn-primary">
          Upload
        </button>
      </form>
    </div>
  );
};

export default FileUpload;
