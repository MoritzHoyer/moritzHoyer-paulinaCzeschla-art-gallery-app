import useSWR from "swr";
import GlobalStyle from "../styles/GlobalStyle";
import Layout from "/components/Layout";
import { format } from "date-fns";
import { useImmerLocalStorageState } from "../lib/hook/useImmerLocalStorageState";

// *********************************************************************

const fetcher = async (url) => {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");

    error.info = await response.json();
    error.status = response.status;

    throw error;
  }

  return response.json();
};

// *********************************************************************

export default function App({ Component, pageProps }) {
  const { data, error } = useSWR(
    `https://example-apis.vercel.app/api/art`,
    fetcher
  );

  const [artPiecesInfo, updateArtPiecesInfo] = useImmerLocalStorageState(
    "art-pieces-info",
    {
      defaultValue: [],
    }
  );

  function handleToggleFavorite(slug) {
    console.log("fav button clicked");

    if (!slug) return;

    updateArtPiecesInfo((draft) => {
      const pieceInfo = draft.find((pieceInfo) => pieceInfo.slug === slug);

      if (pieceInfo) {
        pieceInfo.isFavorite = !pieceInfo.isFavorite;
      } else {
        draft.push({ slug, isFavorite: true });
      }
    });
  }

  // ***************************************

  const [comments, setComments] = useImmerLocalStorageState(
    "art-piece-comments",
    {
      defaultValue: [],
    }
  );

  const handleSubmitComment = (slug, commentText) => {
    setComments((draft) => {
      const newComment = {
        text: commentText,
        date: format(new Date(), "yyyy-MM-dd HH:mm:ss"),
        slug,
      };

      draft.push(newComment);
    });
  };

  // ***************************************

  if (error) return <h1>{error.message}</h1>;

  if (!data) return <h1>Loading ...</h1>;

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          data={data}
          artPiecesInfo={artPiecesInfo}
          handleToggleFavorite={handleToggleFavorite}
          onSubmitComment={handleSubmitComment}
          comments={comments}
        />
      </Layout>
    </>
  );
}
