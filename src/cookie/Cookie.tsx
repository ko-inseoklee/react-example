export const Cookie = () => {

  const onClickSetCookieHttpOnly = async () => {
    let response = await fetch("http://localhost:8080/http/only");
  }

  const onClickSetCookieNotHttpOnly = async () => {
    let response = await fetch("http://localhost:8080/http/notonly");
  }

  return <div>
    <button onClick={onClickSetCookieHttpOnly}>
      Http Only: O (Data: Apple)
    </button>
    <button onClick={onClickSetCookieNotHttpOnly}>
      Http Only: X (Data: Banana)
    </button>
  </div>
}