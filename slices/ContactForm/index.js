import { Bounded } from "../../components/Bounded";

const Field = ({ label, children }) => {
  return (
    <div className="form-control">
      <label className='label'>
        <span className="label-tex">{label}</span>
      </label>
      {children}
    </div>
  );
};

const InputField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = true,
}) => {
  return (
    <Field label={label}>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="input input-bordered w-full"
      />
    </Field>
  );
};

const TextareaField = ({ label, name, placeholder, required = true }) => {
  return (
    <Field label={label}>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        className="textarea textarea-bordered h-24 w-full"
      />
    </Field>
  );
};

const ContactForm = () => {
  return (
    <Bounded as="section" size="small">
      <form
        action="/api/contact"
        method="post"
        className="form-control"
      >
        <InputField label="Name" name="name" placeholder="Jane Doe" />
        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="jane.doe@example.com"
        />
        <TextareaField
          label="Message"
          name="message"
          placeholder="Write your message here…"
        />
        <button
          type="submit"
          className="btn btn-wide mt-4 my-0 mx-auto"
        >
          Send message{" "}
        </button>
      </form>
    </Bounded>
  );
};

export default ContactForm;
