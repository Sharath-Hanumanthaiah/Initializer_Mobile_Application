async function fetchGraphQL(text, variables) {
  // const REACT_APP_GITHUB_AUTH_TOKEN = process.env.REACT_APP_GITHUB_AUTH_TOKEN;
  // http://initializersmobile.ap-south-1.elasticbeanstalk.com/graphql
  // Fetch data from GitHub's GraphQL API:
  const response = await fetch('http://192.168.43.6:8080/graphql', {
  // const response = await fetch(
  //   "http://initializersmobile-demo.ap-south-1.elasticbeanstalk.com/graphql",
  //   {
      method: "POST",
      headers: {
        // Authorization: `bearer ${REACT_APP_GITHUB_AUTH_TOKEN}`,
        "Content-Type": "application/json",
        "X-Tenant": "com.initializers.TestStore"
      },
      body: JSON.stringify({
        query: text,
        variables,
      }),
    }
  );

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;
