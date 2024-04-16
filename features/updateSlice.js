import { global } from "@/actions/actions";

export async function updateSlice(
  form,
  router,
  setError,
  setSuccess,
  setLoading
) {
  console.log(form);
  try {
    setLoading(true);
    const res = await fetch(`/api/user/update/${form?.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const infoData = await res.json();
    console.log(infoData);
    if (res.ok) {
      setLoading(false);
      setSuccess(infoData?.message);
      setTimeout(() => {
        setSuccess("");
      }, 4000);
      setTimeout(() => {
        setTimeout(() => {
          router.push("/mygigme/social");
        }, 4000);
        localStorage.removeItem("profile");
        localStorage.setItem("profile", JSON.stringify(infoData));
      }, 4000);
    } else {
      setLoading(false);
      setError(infoData?.message);
      // setAuthState({ type: global.CLEAR_SUCCESS });
      setTimeout(() => {
        setError("");
      }, 4000);
      // setAuthState({ type: global.ERROR, payload: data?.message });
    }
  } catch (error) {
    setError(error);
    setLoading(false);
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
