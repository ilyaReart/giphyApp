export const getResponse = (url: string) =>
  fetch(url)
    .then(async (result) => {
      if (!result.ok) {
        alert("Произошла http ошибки");
        return;
      } else {
        const response = await result.json();
        return response;
      }
    })