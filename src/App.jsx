import { Formik, Form, Field } from "formik";

function App() {
  return (
    <div>
      <Formik
        initialValues={{
          step: 1,
          name: "",
          surname: "",
          age: "",
          job: "",
          about: "",
        }}
        onSubmit={(values, actions) => {
          console.log("values", values);
        }}
      >
        {(values) => (
          <Form>
            {values.step === 1 && (
              <>
                <Field name="name" />
                <Field name="surname" />
              </>
            )}

          </Form>
        )}
      </Formik>
    </div>
  );
}
export default App;
