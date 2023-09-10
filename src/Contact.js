import styled from "styled-components";

const Contact = () => {
 

  return <Wrapper >
    <h2 className="common-heading">Contact us</h2>
    {/* // eslint-disable-next-line  */}
    <iframe  title="maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d183730.55854792855!2d79.53174604021117!3d29.75967188335108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a754df087a3797%3A0xb761d1b90e0db790!2sBipin%20Tripathi%20Kumaon%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1694193149990!5m2!1sen!2sin" width="85%" height="450px" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>

    <div className="container">
      <div className="contact-form ">
        <form action="https://formspree.io/f/mqkvbjoo" method="POST" className="contact-inputs">
          <input type="text" placeholder="Username" name="username" required autoComplete="off" autoCapitalize="off" />
          <input type="email" placeholder="Email" name="Email" required autoComplete="off" />
          <textarea name="text" cols="30"
            rows="10"
            required
            autoComplete="off"
            placeholder="Enter you message"></textarea>
          <input type="submit" value="send" />
        </form>
      </div>
    </div>

  </Wrapper>;
};
const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
text-align: center;

.container {
  margin-top: 6rem;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;

export default Contact;
