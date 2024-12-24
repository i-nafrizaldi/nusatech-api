const fetchUserData = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve({ name: "John Doe", age: 30 }), 2000);
  });

const getUserData = async () => {
  try {
    const data = await fetchUserData();
    console.log("User Data:", data);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

getUserData();
