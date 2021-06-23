import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const AddBlog = () => {
    const [image, setImage] = useState(null)

    const history = useHistory()

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
       const blogDetails = {
           title: data.title,
           content: data.content,
           image: image
       }

       console.log(blogDetails)
       fetch('http://localhost:5000/addBlog', {
           method: "POST",
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify(blogDetails)
       })
       .then(res => {
           alert('blog added succesfully')
            history.push('/')
       })
       .catch(err => {
           console.log(err)
       })
    };

    const handleFile = (e) => {
        console.log(e.target.files[0])
        const imageData = new FormData()
        imageData.set('key','e5e7c3fd0f17a3470da9a5f0de336257')
        imageData.append('image', e.target.files[0])
    
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(response => {
                setImage(response.data.data.display_url)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="row">
            <div className="col-md-2">
                <Sidebar />
            </div>
            <div className="col-md-10">
                <h2 className='text-center bg-dark text-white p-4'>Add Blog</h2>
                <form onSubmit={handleSubmit(onSubmit)} >
                    <div class="mb-3">
                        <input type="file" class="form-control" name="file" {...register("file")} onChange={handleFile} />
                    </div>
                    <div class="mb-3">
                        <input type="text" placeholder="Your Title" class="form-control" name="title" {...register("title")} />
                    </div>
                    <div class="mb-3">
                        <textarea className="form-control" placeholder="blog content" name="content" {...register("content")} id="" cols="30" rows="10"></textarea>
                    </div>

                    <button type="submit" class="btn" style={{backgroundColor: 'black', color:'white'}}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;