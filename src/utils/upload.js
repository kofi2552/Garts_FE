import axios from "axios";
import newRequest from "./newRequest.js"

const upload = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "w9idijxt");

  try {
    const res = await axios.post(import.meta.env.VITE_UPLOAD_LINK, formData);
    // const { url } = res.data;
    // return url;
    return res.data.secure_url;
  } catch (err) {
    console.error("Error uploading file:", err);
    console.log(err);
  }
};

// export default upload;


// Function to upload the project file
const uploadProjectFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    // Make a POST request to your backend endpoint for file upload
    const response = await newRequest.post('upload', formData);

    // Assuming your backend responds with the file location or URL
    // console.log('backend Response:', response.data);

    return response.data.fileUrl;

  } catch (err) {
    console.error('Error uploading project file:', err);
    throw new Error('Project file upload failed');
  }
};



export { upload, uploadProjectFile };
