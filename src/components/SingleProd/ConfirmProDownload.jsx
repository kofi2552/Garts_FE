import { useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import "./ConfirmPD.css"
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import axios from "axios";

const ConfirmProDownload = () => {

  const { id } = useParams();

  const [creater, setCreator] = useState(null);
  const [project, setProject] = useState();



  const {
    isLoading,
    error,
    data: gigData,
  } = useQuery({
    queryKey: ["gig", id],
    queryFn: () =>
      newRequest.get(`lessons/single/${id}`).then((res) => {
        setProject(res.data);
        // console.log(res.data)
        return res.data;
      }),
  });


  const CreatorId = gigData?.userId;

  
  const {
  } = useQuery({
    queryKey: ["user", CreatorId],
    queryFn: () =>
      newRequest.get(`users/user/${CreatorId}`).then((res) => {
        setCreator(res.data)
        // console.log(res.data)
        return res.data;
      }),
    enabled: !!CreatorId,
  });



    const sendPutRequest = async () => {
    try {

      const paymentReference = localStorage.getItem("paymentReference");

      console.log(paymentReference)

      const response = await newRequest.post(`pay/verify_payment/${id}`, {
        data: {
          reference: paymentReference, // Replace with the actual reference value
        },
        
      });

      console.log(response.data); 

      if (response.data.status === "success") {
        // If success, show the download link
        // setDownloadVisible(true);
      }

    }  catch (error) {
      console.error("Error sending post request:", error);
    }
    };


    useEffect(() => {
    sendPutRequest();

  }, [id]);


  let countdown = 10;

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      console.log(`Countdown: ${countdown}`);
      countdown--;
  
      if (countdown === 0) {
        clearInterval(countdownInterval);
  
        // After the countdown, initiate the download
        if (project && project?.projectFileUrl) {
          initiateDownload(project.projectFileUrl);
        }
  
        console.log("File download initiated", project?.projectFileUrl);
      }
    }, 1000);
  
    // Cleanup the interval when the component unmounts
    return () => clearInterval(countdownInterval);
  }, [project]);


const initiateDownload = async (fileUrl) => {
  try {
    // Make a GET request to your backend endpoint for file download
    const response = await axios.get(`http://localhost:8800/download/${extractFilenameFromUrl(fileUrl)}`, {
      responseType: 'blob',  // Set responseType to 'blob' to handle binary data
    });

    // Create a Blob from the response data
    const blob = new Blob([response.data], { type: response.headers['content-type'] });

    // Create a link element and trigger a download
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = extractFilenameFromUrl(fileUrl);
    link.click();

    // Clean up
    window.URL.revokeObjectURL(link.href);
  } catch (error) {
    console.error('Error initiating download:', error);
  }
};

// Function to extract filename from the URL
const extractFilenameFromUrl = (fileUrl) => {
  const urlParts = fileUrl.split('/');
  return urlParts[urlParts.length - 1];
};



  return (
    <>
      <section className="project-section-wrapper">
        <div className="project-container-fluid">
          <div className="detail-container">
            <div className="image-content">
              <img
                src={project?.image}
                alt=""
                loading="lazy"
              />
            </div>
                <h2>{project?.title}</h2>
                <div className="loader">LOADING........</div>
              <div className="asset-info">
                <p>We are preparing the file. Your download will begin shortly</p>
                <div className="act-dwn">if your download doesnt start automatically, click <a onClick={sendPutRequest}>here</a></div>
            </div>
          </div>
        </div>
      </section>
     
    </>
  );
};

export default ConfirmProDownload;
