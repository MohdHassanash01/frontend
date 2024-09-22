'use client';
import React from 'react'
import axios, { Axios } from 'axios';
import { useFormik } from 'formik'
import toast from 'react-hot-toast';


// form handling 




const AddProperty = () => {


  const propertyForm = useFormik({
    initialValues: {
      owner: "",
      location: "",
      country: "",
      city: "",
      price: "",
      image: "",
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {

      axios.post('http://localhost:5000/property/add', values)
        .then((response) => {
          console.log(response.status);
          resetForm()
        }).catch((err) => {
          console.log(err);

          console.log(err.response?.data);
          setSubmitting(false)

        });

    },
  })




  // cloudnary 

  const handleUpload = (e) => {
    let file = e.target.files[0]
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'real estate project')
    formData.append('cloud_name', 'dgiyyhb9f')

    axios.post("https://api.cloudinary.com/v1_1/dgiyyhb9f/image/upload", formData, {
      headers: {
        'Content-Type': "multipart/form-data"
      }
    })
      .then((result) => {
        console.log(result.data);
        toast.success('file upload successfully')
        propertyForm.setFieldValue('image', result.data.url);

      }).catch((err) => {
        console.log(err);
        toast.error("Failed to upload file")

      })


  }


  return (
    <div className='w-full h-screen bg-slate-300  pt-28 flex justify-center pb-[100px] bg-[url("/images/hero.jpg")] bg-cover bg-center'>


      <form
        onSubmit={propertyForm.handleSubmit} className='flex flex-col w-fit  p-10 h-fit rounded-xl gap-3    backdrop-blur-md bg-white/20'>


        <h1 className='font-extrabold text-2xl text-black'>Register Your Property</h1>


        <div className="flex flex-col">
          <label htmlFor="owner"
            className="font-medium">Enter property owner's name:</label>
          <input
            id='owner'
            onChange={propertyForm.handleChange}
            value={propertyForm.values.owner}
            type="text" className="rounded-[5px] pl-3 border-slate-500 border-[1px] " />
        </div>



        <div className="flex flex-col">
          <label htmlFor="location"
            className="font-medium"
          >Enter your location :</label>
          <input
            id='location'
            onChange={propertyForm.handleChange}
            value={propertyForm.values.location}
            type="text" className="rounded-[5px] pl-3 border-slate-500 border-[1px] " />
        </div>


        <div className="flex flex-col">
          <label htmlFor="country"
            className="font-medium"
          >Enter your Country :</label>
          <input
            id='country'
            onChange={propertyForm.handleChange}
            value={propertyForm.values.country}
            type="text" className="rounded-[5px] pl-3 border-slate-500 border-[1px] " />
        </div>


        <div className="flex flex-col">
          <label htmlFor="city"
            className="font-medium"
          >Enter your City :</label>
          <input
            id='city'
            onChange={propertyForm.handleChange}
            value={propertyForm.values.city}
            type="text" className="rounded-[5px] pl-3 border-slate-500 border-[1px] " />
        </div>


        <div className="flex flex-col">
          <label htmlFor="price"
            className="font-medium"
          >Enter Price :</label>
          <input
            id='price'
            onChange={propertyForm.handleChange}
            value={propertyForm.values.price}
            type="text" className="rounded-[5px] pl-3 border-slate-500 border-[1px] " />
        </div>

        <div className="flex flex-col">
          <label htmlFor="image"
            className="font-medium"
          >Upload Image :</label>
          <input
            id='image'
            onChange={handleUpload}
            type="file" className="rounded-[5px]  border-slate-500 border-[1px] " />
        </div>

        <input
          disabled={!propertyForm.values.image}
          type="submit" className="rounded-[5px]  disabled:bg-rose-200 bg-rose-500 text-white font-semibold p-1 mt-2" />



      </form>




    </div>
  )
}

export default AddProperty

