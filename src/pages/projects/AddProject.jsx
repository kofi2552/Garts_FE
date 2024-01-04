import React, { useReducer, useEffect, useState } from "react";
import "./AddProject.css"
import { RiImageAddFill } from "react-icons/ri";
import { RiSaveLine } from "react-icons/ri";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { gigReducer, INITIAL_STATE } from "../../reducers/gigReducer";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import upload from "../../utils/upload";

const AddProject = () => {

    const [singleFile, setSingleFile] = useState(undefined);
    const [uploading, setUploading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState([]);
    const [successMessage, setSuccessMessage] = useState(null);
    const [user, setUser] = useState(null);
    const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);


    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const response = await newRequest.get(
              "http://localhost:8800/api/categories/all"
            );
            setCategories(response.data);
          } catch (error) {
            console.log("couldn't fetch categories:", error);
            setError("An error occurred! we couldn't fetch categories.");
          }
        };
    
        fetchCategories();
      }, []);
    
      const handleChange = (name, value) => {
        // If the name is unlockcode, set the value directly
          if (name === "unlockcode") {
            dispatch({
              type: "CHANGE_INPUT",
              payload: { name, value },
            });
          } 
          else if (name === "filetype") { // Check for the correct name
            // For the "filetype" field, dispatch the correct action type
            dispatch({
              type: "CHANGE_FILETYPE",
              payload: value,
            });
          }
          else {
            // For other fields, handle normally
            dispatch({
              type: "CHANGE_INPUT",
              payload: { name, value },
            });
          }
     };


    const handleCategoryChange = (e) => {
      // console.log("Selected Category ID:", e.target.value);
      dispatch({
        type: "CHANGE_CATEGORY",
        payload: e.target.value,
      });
    };


    const handleFileTypeChange = (e) => {
      // console.log("Selected filetype:", e.target.value);
      dispatch({
        type: "CHANGE_FILETYPE",
        payload: e.target.value,
      });
    };

    //fetch user from session
  useEffect(() => {
    // Fetch user data from session storage
    const storedUser = sessionStorage.getItem("user");

    if (storedUser) {
      // Parse the stored JSON string to get the user object
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

    const handleUploadAndSubmit = async (e) => {
        e.preventDefault();
        setUploading(true);

        try {
            const image = await upload(singleFile);
            setUploading(false);

           const userId = user?._id

          //  console.log("userId:", userId)

            dispatch({ type: "ADD_IMAGE", payload: { image, userId  } });

            // Submit the form after successful upload
            const payload = { ...state, image, userId  };
            // console.log("Submit Payload:", payload);
            handleSubmit(payload);
        } catch (err) {
            console.log(err,": error in file upload and payload submit!");
            setUploading(false);
            setError("An error occurred while uploading the image. Please try again.");
        }
    };

    const navigate = useNavigate();

    const queryClient = useQueryClient();

    const mutation = useMutation({
        mutationFn: (gig) => {
            return newRequest.post("/lessons", gig);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["myGigs"]);
        },
    });

    const handleSubmit = async (payload) => {
        const { image, ...formData } = payload;
        const gigData = {
            ...formData,
            image: image,
        };
        try {
          // Attempt to mutate and wait for the result
          await mutation.mutateAsync(gigData);
          setSuccessMessage("Project created successfully!");
          // navigate("/search");
      } catch (error) {
          // If there's an error, extract and display the error message
          if (error.response &&  error.message && error.response.data && error.response.data.error && error.response.data.error.message) {
              setError([`An error occurred: ${error.response.data.error.message || error.message}`]);
          } else {
              // Use a generic message if the specific error structure is not available
              setError("An error occurred while saving the project. Please try again.");
          }
      }
    };


    // Function to generate a random unlock code
  const generateUnlockCode = () => {
    const code = Math.random().toString(36).substr(2, 8); // Change the length as needed
    handleChange("unlockcode", code);
  };


    return(
        <div className="project-card-container">
           <div className="image-section">
              <div className="project-img-cover">
                  {singleFile ? (
                      <img src={URL.createObjectURL(singleFile)} alt="Project Cover" />
                  ) : (
                      <RiImageAddFill size={80}/>
                  )}
                  <input
                      required
                      type="file"
                      onChange={(e) => setSingleFile(e.target.files[0])}
                  />
              </div>
                  <label>Click ☝️ to set Project Image</label>
          </div>
        <div className="card-project-content">
           
           <div className="card-body">
           { error ?  (
              <div className={error? "error-message": ""}>
              <p>{error}</p>
            </div>
            ):("no error")
           }
           {successMessage && (
            <div className="success-message">
              <p>{successMessage}</p>
            </div>
          )}

          {/* {
            if(error){
              <div className={error? "error-message": ""}>
              <p>{error}</p>
            </div>
            }
            else if(successMessage){
              <div className="success-message">
              <p>{successMessage}</p>
            </div>
            }
          } */}
           <form onSubmit={handleUploadAndSubmit}>
           <div className="card-heading">
             <h3>Add Project</h3>
             <button type="submit"><RiSaveLine  size={17}/>{uploading ? "Creating..." : "Save"}</button>
           </div>
               <div className="form-body">
                 <h6>USER INFORMATION</h6>
               <div className="form-section">
                   <div className="form-group">
                     <div className="col-6">
                     <label>Title</label>
                     <input type="text" required placeholder={"project title"} className="form-control" onChange={(e) => handleChange("title", e.target.value)}/>
                     </div>
                     <div className="col-6">
                     <label>Price</label>
                     <input type="text" required placeholder={"price"} className="form-control" onChange={(e) => handleChange("price", e.target.value)}/>
                     </div>
                   </div>
                   <div className="form-group">
                     <div className="col-6">
                     <label>File Type</label>
                     <select
                            name="filetype" id="ftype" 
                            className="form-control"
                            value={state.filetype} onChange={(e) => handleFileTypeChange(e)}
                            >
                            <option value="">Select</option>
                            <option value="image">image</option>
                            <option value="zip">Zip file</option>
                            </select>
                     </div>
                     <div className="col-6">
                     <label>Business Name</label>
                     <input type="text" required placeholder={ "e.g Skit Graphics"} className="form-control" onChange={(e) => handleChange("brand", e.target.value)}/>
                     </div>
                   </div>
                 </div>
                 </div>
               <hr/>
               <div className="form-body">
                 <h6>PROJECT INFORMATION</h6>
                   <div className="form-section">
                     <div className="form-group">
                       <div className="col-6">
                       <label>Category</label>
                       <select
                            name="category" id="cat" 
                            className="form-control"
                            value={state.category} onChange={(e) => handleCategoryChange(e)}
                            >
                            <option value="">Select a category</option>
                            {categories.map((category) => (
                                <option key={category._id} value={category._id}>
                                {category.name}
                                </option>
                            ))}
                            </select>
                       </div>
                       <div className="col-6">
                       <label>Zip Unlock Code</label>
                       <input type="text" placeholder={"N/A"} className="form-control" onChange={(e) => handleChange("zipcode", e.target.value)}/>
                       </div>
                     </div>
                     <div className="form-group">
                      <div className="col-6">
                       <div className="checkbox-container">
                       <input
                          type="checkbox"
                          id="isPaid"
                          name="isPaid"
                          className="form-control-x"
                          
                          checked={state.isPaid}
                          onChange={(e) => handleChange("isPaid", e.target.checked)}
                        />
                        <label>Premium Project (Tick) </label>
                       </div>
                       </div>
                       <div className="col-6">
                       <label>Tags</label>
                       <input type="text" required placeholder={"N/A"} className="form-control" onChange={(e) => handleChange("tags", e.target.value)}/>
                       </div>
                     </div>
                   </div>
                   </div>
               <hr/>
               <div className="form-body">
                 <h6>PROJECT DETAILS</h6>
                   <div className="form-section">
                     <div className="form-group">
                       <div className="col-12">
                        <div className="lg-control">
                       <label>Generate Unlock Code</label>
                       <div className="un-code-group">
                          <p  className="form-control" 
                              onChange={(e) => 
                              handleChange("unlockcode", e.target.value)}>{state.unlockcode}</p>
                          <button type="button" onClick={generateUnlockCode}>Generate</button>
                       </div>
                       </div>
                       <div className="lg-control">
                       <label>Description</label>
                       <textarea type="text" required placeholder="Enter extra details" className="form-control" onChange={(e) => handleChange("desc", e.target.value)}/>
                       </div>
                       </div>
                     </div>
                   </div>
                   </div>
                  
             </form>
          
             </div>
        </div>
        <div className="card-footer"><IoIosHelpCircleOutline size={20}/>Contact <a>support</a> for help</div>
        </div>
     );
 
 
}

export default AddProject