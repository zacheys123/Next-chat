import { global } from "@/actions/actions";

export async function registerSlice(form, router, setAuthState) {
  const firstname = form?.given_name;
  const secondname = form?.family_name;
  const auth0 = form?.sub;
  const picture = form?.picture;
  const email = form?.email || form?.name;
  const formdata = { firstname, secondname, auth0, picture, email };

  try {
    const res = await fetch(`api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });
    const infoData = await res.json();
    console.log(infoData.data);
    if (res.ok) {
      setAuthState({ type: global.SUCCESS, payload: infoData?.data });
      setTimeout(() => {
        localStorage.setItem("token", JSON.stringify(infoData?.token));
        localStorage.setItem("profile", JSON.stringify(infoData?.data));
      }, 3000);
    } else {
      // setAuthState({ type: global.CLEAR_SUCCESS });
      setTimeout(() => {
        setAuthState({ type: global.CLEAR_ERROR });
      }, 4000);
      // setAuthState({ type: global.ERROR, payload: data?.message });
    }
  } catch (error) {
    if (error.message === "Network Error") {
      // setAuthState({
      //   type: global.CLEAR_SUCESS,
      // });
      // setAuthState({
      //   type: global.ERROR,
      //   payload: error.message,
      // });
      console.log(error.message);
      setTimeout(() => {
        router.push("/");
      }, 4000);
    }
  }
}
