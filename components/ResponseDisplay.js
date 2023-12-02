// file: /components/ResponseDisplay.js

const ResponseDisplay = ({ data, error, loading }) => {
  let content;

  if (loading) {
    content = "Loading...";
  } else if (error) {
    content = `Error: ${error.message}`;
  } else if (data) {
    console.log("Data from OpenAI API in display: ", data.result);

    content = (
      <>
        {/* <div>{[...data.result.ideas]}</div>
        <div>{data.result.ideas}</div> */}
        <ul>
          {data.result.ideas.map((idea, index) => (
            <li key={index}>{idea}</li>
          ))}
        </ul>

        {/* <AssignmentIdeasDisplay ideas={data.result.ideas} /> */}
      </>
    );
  } else {
    content = "";
  }

  return <div className="response-display">{content}</div>;
};

export default ResponseDisplay;
