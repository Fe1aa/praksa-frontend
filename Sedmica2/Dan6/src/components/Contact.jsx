function Contact() {
  return (
    <section id="contact" className="container my-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="text-center">
            <h2 className="h2 md-3">Contact Me</h2>
          </div>
          <form action="#" method="post">
            <div className="mb-3">
              <label for="ime_prezime" className="form-label">
                Enter your name and surname
              </label>
              <input
                type="text"
                className="form-control"
                id="ime_prezime"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="email_adresa" className="form-label">
                Enter your email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email-adresa"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="datum-rodjena" className="form-label">
                Enter your date of birth
              </label>
              <input
                type="date"
                className="form-control"
                id="datum-rodjena"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label for="grad" className="form-label">
                Select the city you were born in
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">Bihać</option>
                <option value="2">Cazin</option>
                <option value="3">Bogotá</option>
              </select>
            </div>
            <button type="submit" className="cta my-3">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
