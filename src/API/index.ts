export const getResponse = (url: string) =>
  fetch(url).then(async (result) => {
    const response = await result.json();
    return response;
  });
