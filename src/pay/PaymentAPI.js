import newRequest from "../utils/newRequest";

// Function to initialize the Paystack transaction
export const initializeTransaction = async (
  email,
  amount,
  phone,
  username,
  unlockcode,
) => {
  try {
    const response = await newRequest.post(
      "/pay/initiate_payment",
      {
        email: email,
        amount: amount,
        phone: phone,
        username: username,
        unlockcode:unlockcode,
      }
    );
    
    console.log(response.data)
    
    return {authorization_url: response.data.authorizationUrl, 
      reference: response.data.reference
    };
  } catch (error) {
    throw new Error("Error initializing Paystack transaction");
  }
};