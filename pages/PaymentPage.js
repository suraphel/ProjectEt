// this page will verify if the user has made all the necessay payments and for how long tghis payment will be valid for.

const Payment = () => {
  return (
    <div>
      <p> Verified user</p>

      <form>
        <label htmlFor="Payment"> </label>
        <input type="number" min="0" max="9"></input>
      </form>
    </div>
  );
};

export default Payment;
