import { useForm } from "react-hook-form";
import { useContext } from "react";

import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";

const AddAToy = () => {
    const {user}=useContext(AuthContext)
   


    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data) => {

         
        fetch('https://toy-box-server-topaz.vercel.app/addedProduct',{
            method:"POST",
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result=>{
            console.log(result)
            if(result.insertedId){
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Your Post has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
 
           }
                
         
                 
          
        })

        console.log(data)

    }



    return (
        <div className=" ">
            <div className="grid  md:grid-cols-2  sm:grid-cols-1 md:ms-96">
                <div className="addAtoy ">
                    <form className="form-formate" onSubmit={handleSubmit(onSubmit)}>

                        <input
                            className="text-input mt-2 py-3 px-14 px- me-4"
                            {...register("sellerName")}
                            placeholder="Seller Name"
                            defaultValue={user?.displayName}
                        />
                        <input
                            className="text-input mt-2 py-3 px-14 px- me-4"
                            {...register("email")}
                            placeholder="Email address"
                            defaultValue={user?.email}
                        />
                        <input
                            className="text-input mt-2 py-3 px-14 px- me-4"
                            {...register("toyName")}
                            placeholder="Toy Name"
                            defaultValue=""
                        />
                        <input
                            className="text-input mt-2 py-3 px-14 px- me-4"
                            {...register("image")}
                            placeholder=" Toy Image Link"
                            defaultValue=""
                        />
                        <input
                            className="text-input mt-2 py-3 px-14 px- me-4"
                            
                            {...register("price")}
                            placeholder="Price"
                            defaultValue=""
                        />
                        <input
                            className="text-input mt-2 py-3 px-14 px- me-4"
                            {...register("ratting")}
                            placeholder="Product Ratting"
                            defaultValue=""
                        />
                        <select className="md:me-16 py-3 px-20  mt-2" {...register("subCategory")}>
                            <option disabled selected>Select Category</option>
                            <option value="sport_car">sport-car</option>
                            <option value="truck">truck</option>
                            <option value="polic_car">police-car</option>
                        </select>
                        <input
                            className="text-input mt-2 py-3 px-14 px- md:me-4"
                            {...register("available_quantity")}
                            placeholder="Available Quantity"
                            defaultValue=""
                        />
                        <textarea
                            className="text-input mt-2 py-3 px-16 px- md:me-4"
                            {...register("description")}
                            placeholder="Product Description"
                            defaultValue=""
                        />


                        {/* <input {...register("exampleRequired", { required: true })} /> */}

                        {errors.exampleRequired && <span>This field is required</span>}



                        <br></br><input className="btn submit-btn my-2 ms-1 w-72" type="submit" value='Add Toy' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAToy;