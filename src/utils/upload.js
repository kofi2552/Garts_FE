import axios from "axios";

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

export default upload;