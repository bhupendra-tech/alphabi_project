// export async function homePageFeed() {
//   try {
//     const res = await fetch(
//       `https://api.giphy.com/v1/gifs/trending?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}`
//     );
//     console.log(res);
//   } catch (error) {
//     console.error("unable to fetch", error);
//   }
// }
export async function fetchGif(query) {
  console.log('query is',query)
  try {
    const res = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.NEXT_PUBLIC_GIPHY_API_KEY}&q=${query}`
    );
    return res;
  } catch (error) {}
}
