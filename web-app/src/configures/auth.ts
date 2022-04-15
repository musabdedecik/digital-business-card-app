export const getToken = ():boolean => {
  try {
    if (sessionStorage.getItem("token")) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error("Auth error!",error);
    return false;
  }
};
export const setToken = (token: string) => {
    try {
        sessionStorage.setItem("token", token);
        return true;
    } catch (error) {
        console.error("Set Token Error", error)
        return false;
    }
} 