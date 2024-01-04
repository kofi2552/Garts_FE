import newRequest from "../utils/newRequest";

// Function to initialize the Paystack transaction
export const initializeTransaction = async (
  email,
  amount,
  phone,
  username,
  token
) => {
  try {
    const response = await newRequest.post(
      "/pay/initiate_payment",
      {
        email: email,
        amount: amount,
        phone: phone,
        username: username,
      },
      {
        // Include the token in the headers for authorization
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data.authorizationUrl;
  } catch (error) {
    throw new Error("Error initializing Paystack transaction");
  }
};