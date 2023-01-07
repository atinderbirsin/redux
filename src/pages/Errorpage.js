export default function ErrorPage() {
  
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{window.location.pathname}</i>
        </p>
      </div>
    );
  }